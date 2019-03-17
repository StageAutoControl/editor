import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DMXPreset} from "../../../lib/api/dmx/dmx-preset/dmx-preset";
import {DMXPresetService} from "../../../lib/api/dmx/dmx-preset/dmx-preset.service";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-dmx-preset-list',
  templateUrl: './dmx-preset-list.component.html',
  styleUrls: ['./dmx-preset-list.component.less']
})
export class DMXPresetListComponent implements OnInit {
  entities$: Observable<DMXPreset[]>;
  displayedColumns: string[] = ['name', 'typeId', 'universe', 'startChannel', 'tags', 'actions'];
  dataSource = new MatTableDataSource<DMXPreset>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxPresetService: DMXPresetService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.entities$ = this.dmxPresetService.entities$;

    this.entities$.subscribe((devices: DMXPreset[]) => {
      this.dataSource.data = devices;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEntity(entity: DMXPreset) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXPreset ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxPresetService.remove(entity.id)))
      .subscribe()
  }
}