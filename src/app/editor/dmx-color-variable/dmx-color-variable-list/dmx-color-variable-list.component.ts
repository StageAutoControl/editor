import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXColorVariable} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable";
import {DMXColorVariableService} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable.service";

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
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }

      return data[sortHeaderId];
    };
    this.entities$ = this.dmxColorVariableService.entities$;

    this.entities$.subscribe((entities: DMXColorVariable[]) => {
      this.dataSource.data = entities as DMXColorVariable[];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
