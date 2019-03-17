import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXTransition} from "../../../lib/api/dmx/dmx-transition/dmx-transition";
import {DMXTransitionService} from "../../../lib/api/dmx/dmx-transition/dmx-transition.service";

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
    private dmxAnimationService: DMXTransitionService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.entities$ = this.dmxAnimationService.entities$;

    this.entities$.subscribe((entities: DMXTransition[]) => {
      this.dataSource.data = entities as DMXTransition[];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
      .pipe(switchMap(() => this.dmxAnimationService.remove(entity.id)))
      .subscribe()
  }
}
