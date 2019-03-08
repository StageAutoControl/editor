import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DmxDeviceGroup, DmxDeviceSelector} from "../../../lib/api/dmx/dmx-device-group/dmx-device-group";
import {DmxDeviceGroupService} from "../../../lib/api/dmx/dmx-device-group/dmx-device-group.service";

@Component({
  selector: 'app-dmx-device-group-list',
  templateUrl: './dmx-device-group-list.component.html',
  styleUrls: ['./dmx-device-group-list.component.less']
})
export class DmxDeviceGroupListComponent implements OnInit {
  public dmxDevices$: Observable<DmxDeviceGroup[]>;
  displayedColumns: string[] = ['name', 'selectors', 'actions'];
  dataSource = new MatTableDataSource<DmxDeviceGroup>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxDeviceGroupService: DmxDeviceGroupService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dmxDevices$ = this.dmxDeviceGroupService.entities$;

    this.dmxDevices$.subscribe((group: DmxDeviceGroup[]) => this.dataSource.data = group);
    this.load();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  load() {
    this.dmxDeviceGroupService.getAll();
  }

  deleteEntity(entity: DmxDeviceGroup) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXDeviceGroup ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result:boolean) => result))
      .pipe(switchMap(() => this.dmxDeviceGroupService.remove(entity.id)))
      .subscribe()
  }

  selector(sel:DmxDeviceSelector): string {
    if (sel.id) {
       return `ID: ${sel.id}`;
    }

    return `Tags: ${Array.from(sel.tags).join(", ")}`;
  }
}
