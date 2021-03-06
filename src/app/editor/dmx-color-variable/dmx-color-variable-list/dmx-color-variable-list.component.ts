import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXColorVariable} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable";
import {DMXColorVariableService} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable.service";
import {SortingDataAccessor} from "../../sorting-data-accessor";
import {newName} from "../../names";
import {StorageService} from "../../../lib/storage/storage.service";

@Component({
  selector: 'app-dmx-color-variable-list',
  templateUrl: './dmx-color-variable-list.component.html',
  styleUrls: ['./dmx-color-variable-list.component.less']
})
export class DMXColorVariableListComponent implements OnInit {
  public entities$: Observable<DMXColorVariable[]>;
  displayedColumns: string[] = ['name', 'value', 'hex', 'actions'];
  dataSource = new MatTableDataSource<DMXColorVariable>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxColorVariableService: DMXColorVariableService,
    private dialog: MatDialog,
    private storage: StorageService,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filter = this.storage.getString('COLOR_VARIABLE_LIST_FILTER');
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = SortingDataAccessor;
    this.entities$ = this.dmxColorVariableService.entities$;

    this.entities$.subscribe((entities: DMXColorVariable[]) => {
      this.dataSource.data = entities as DMXColorVariable[];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.storage.setString('COLOR_VARIABLE_LIST_FILTER', this.dataSource.filter);
  }

  copyEntity(entity: DMXColorVariable) {
    this.dmxColorVariableService.create(Object.assign({}, entity, {id: null, name: newName(entity.name)})).subscribe();
  }

  deleteEntity(entity: DMXColorVariable) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXColorVariable ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxColorVariableService.remove(entity.id)))
      .subscribe()
  }

  value(entity: DMXColorVariable): string {
    return `R=${entity.red} G=${entity.green} B=${entity.blue} W=${entity.white}`;
  }
}
