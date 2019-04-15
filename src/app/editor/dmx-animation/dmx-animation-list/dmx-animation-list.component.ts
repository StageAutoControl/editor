import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXAnimation} from "../../../lib/api/dmx/dmx-animation/dmx-animation";
import {DMXAnimationService} from "../../../lib/api/dmx/dmx-animation/dmx-animation.service";
import {SortingDataAccessor} from "../../sorting-data-accessor";
import {newName} from "../../names";

@Component({
  selector: 'app-dmx-animation-list',
  templateUrl: './dmx-animation-list.component.html',
  styleUrls: ['./dmx-animation-list.component.less']
})
export class DMXAnimationListComponent implements OnInit {
  public entities$: Observable<DMXAnimation[]>;
  displayedColumns: string[] = ['name', 'frames', 'actions'];
  dataSource = new MatTableDataSource<DMXAnimation>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxAnimationService: DMXAnimationService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = SortingDataAccessor;
    this.entities$ = this.dmxAnimationService.entities$;

    this.entities$.subscribe((entities: DMXAnimation[]) => {
      this.dataSource.data = entities as DMXAnimation[];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  copyEntity(entity: DMXAnimation) {
    this.dmxAnimationService.create(Object.assign({}, entity, {id: null, name: newName(entity.name)})).subscribe();
  }

  deleteEntity(entity: DMXAnimation) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXAnimation ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxAnimationService.remove(entity.id)))
      .subscribe()
  }
}
