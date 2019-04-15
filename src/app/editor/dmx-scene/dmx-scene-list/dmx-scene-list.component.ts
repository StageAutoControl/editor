import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DMXScene} from "../../../lib/api/dmx/dmx-scene/dmx-scene";
import {DMXSceneService} from "../../../lib/api/dmx/dmx-scene/dmx-scene.service";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {SortingDataAccessor} from "../../sorting-data-accessor";
import {newName} from "../../names";

@Component({
  selector: 'app-dmx-scene-list',
  templateUrl: './dmx-scene-list.component.html',
  styleUrls: ['./dmx-scene-list.component.less']
})
export class DMXSceneListComponent implements OnInit {
  entities$: Observable<DMXScene[]>;
  displayedColumns: string[] = ['name', 'timing', 'subScenes', 'actions'];
  dataSource = new MatTableDataSource<DMXScene>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxSceneService: DMXSceneService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = SortingDataAccessor;
    this.entities$ = this.dmxSceneService.entities$;

    this.entities$.subscribe((devices: DMXScene[]) => {
      this.dataSource.data = devices;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  copyEntity(entity: DMXScene) {
    this.dmxSceneService.create(Object.assign({}, entity, {id: null, name: newName(entity.name)})).subscribe();
  }

  deleteEntity(entity: DMXScene) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXScene ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxSceneService.remove(entity.id)))
      .subscribe()
  }
}
