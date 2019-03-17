import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DmxColorVariable} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable";
import {DmxColorVariableService} from "../../../lib/api/dmx/dmx-color-variable/dmx-color-variable.service";

@Component({
  selector: 'app-dmx-color-variable-list',
  templateUrl: './dmx-color-variable-list.component.html',
  styleUrls: ['./dmx-color-variable-list.component.less']
})
export class DmxColorVariableListComponent implements OnInit {
  public entities$: Observable<DmxColorVariable[]>;
  displayedColumns: string[] = ['name', 'value', 'hex', 'actions'];
  dataSource = new MatTableDataSource<DmxColorVariable>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxColorVariableService: DmxColorVariableService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.entities$ = this.dmxColorVariableService.entities$;

    this.entities$.subscribe((entities: DmxColorVariable[]) => {
      this.dataSource.data = entities as DmxColorVariable[];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEntity(entity: DmxColorVariable) {
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

  value(entity: DmxColorVariable): string {
    return `R=${entity.red} G=${entity.green} B=${entity.blue} W=${entity.white}`;
  }
}
