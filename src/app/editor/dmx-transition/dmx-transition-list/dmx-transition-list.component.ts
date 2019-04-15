import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXTransition} from "../../../lib/api/dmx/dmx-transition/dmx-transition";
import {DMXTransitionService} from "../../../lib/api/dmx/dmx-transition/dmx-transition.service";
import {SortingDataAccessor} from "../../sorting-data-accessor";
import {newName} from "../../names";

@Component({
  selector: 'app-dmx-transition-list',
  templateUrl: './dmx-transition-list.component.html',
  styleUrls: ['./dmx-transition-list.component.less']
})
export class DMXTransitionListComponent implements OnInit {
  public entities$: Observable<DMXTransition[]>;
  displayedColumns: string[] = ['name', 'ease', 'length', 'params', 'actions'];
  dataSource = new MatTableDataSource<DMXTransition>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxTransitionService: DMXTransitionService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = SortingDataAccessor;
    this.entities$ = this.dmxTransitionService.entities$;

    this.entities$.subscribe((entities: DMXTransition[]) => {
      this.dataSource.data = entities as DMXTransition[];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  copyEntity(entity: DMXTransition) {
    this.dmxTransitionService.create(Object.assign({}, entity, {id: null, name: newName(entity.name)})).subscribe();
  }

  deleteEntity(entity: DMXTransition) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXTransition ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxTransitionService.remove(entity.id)))
      .subscribe()
  }
}
