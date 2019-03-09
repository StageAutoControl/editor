import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DmxDevice} from "../../../lib/api/dmx/dmx-device/dmx-device";
import {DmxDeviceType} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type";
import {DmxDeviceService} from "../../../lib/api/dmx/dmx-device/dmx-device.service";
import {DmxDeviceTypeService} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type.service";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-dmx-device-list',
  templateUrl: './dmx-device-list.component.html',
  styleUrls: ['./dmx-device-list.component.less']
})
export class DmxDeviceListComponent implements OnInit {
  dmxDevices$: Observable<DmxDevice[]>;
  dmxDeviceTypes: { [id: string]: DmxDeviceType } = {};
  displayedColumns: string[] = ['name', 'typeId', 'universe', 'startChannel', 'tags', 'actions'];
  dataSource = new MatTableDataSource<DmxDevice>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxDeviceService: DmxDeviceService,
    private dmxDeviceTypeService: DmxDeviceTypeService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dmxDevices$ = this.dmxDeviceService.entities$;

    this.dmxDeviceTypeService.entities$
      .subscribe((types: DmxDeviceType[]) => {
        types.forEach((t: DmxDeviceType) => this.dmxDeviceTypes[t.id] = t);
      });

    this.dmxDevices$.subscribe((devices: DmxDevice[]) => {
      this.dataSource.data = devices;
    });
  }

  getDmxDeviceType(id: string): DmxDeviceType | null {
    if (!(id in this.dmxDeviceTypes)) {
      return null;
    }

    return this.dmxDeviceTypes[id];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEntity(entity: DmxDevice) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXDevice ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxDeviceService.remove(entity.id)))
      .subscribe()
  }
}
