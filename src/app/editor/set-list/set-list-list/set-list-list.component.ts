import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {SetList} from "../../../lib/api/set-list/set-list";
import {SetListService} from "../../../lib/api/set-list/set-list.service";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXSceneService} from "../../../lib/api/dmx/dmx-scene/dmx-scene.service";
import {SortingDataAccessor} from "../../sorting-data-accessor";
import {newName} from "../../names";
import {StorageService} from "../../../lib/storage/storage.service";

@Component({
  selector: 'app-set-list-list',
  templateUrl: './set-list-list.component.html',
  styleUrls: ['./set-list-list.component.less']
})
export class SetListListComponent implements OnInit {
  entities$: Observable<SetList[]>;
  displayedColumns: string[] = ['name', 'songs', 'actions'];
  dataSource = new MatTableDataSource<SetList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private setListService: SetListService,
    private dmxSceneService: DMXSceneService,
    private dialog: MatDialog,
    private storage: StorageService,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filter = this.storage.getString('SET_LIST_LIST_FILTER');
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = SortingDataAccessor;
    this.entities$ = this.setListService.entities$;

    this.entities$.subscribe((setLists: SetList[]) => {
      this.dataSource.data = setLists;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.storage.setString('SET_LIST_LIST_FILTER', this.dataSource.filter);
  }

  copyEntity(entity: SetList) {
    this.setListService.create(Object.assign({}, entity, {id: null, name: newName(entity.name)})).subscribe();
  }

  deleteEntity(entity: SetList) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete SetList ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.setListService.remove(entity.id)))
      .subscribe()
  }
}
