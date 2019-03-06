import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DmxDeviceType} from "../dmx-device-type";
import {Observable} from "rxjs";
import {DmxDeviceTypeService} from "../dmx-device-type.service";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-dmx-device-type-list',
  templateUrl: './dmx-device-type-list.component.html',
  styleUrls: ['./dmx-device-type-list.component.less']
})
export class DmxDeviceTypeListComponent implements OnInit {
  public dmxDevices$: Observable<DmxDeviceType[]>;
  displayedColumns: string[] = ['name', 'channelCount', 'channelsPerLED', 'leds', 'strobe', 'dimmer', 'mode', 'moving', 'actions'];
  dataSource = new MatTableDataSource<DmxDeviceType>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxDeviceTypeService: DmxDeviceTypeService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dmxDevices$ = this.dmxDeviceTypeService.entities$;

    this.dmxDevices$.subscribe((devices: DmxDeviceType[]) => {
      this.dataSource.data = devices as DmxDeviceType[];
    });

    this.load();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  load() {
    this.dmxDeviceTypeService.getAll();
  }

  deleteEntity(entity: DmxDeviceType) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXDeviceType ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result:boolean) => result))
      .pipe(switchMap(() => this.dmxDeviceTypeService.remove(entity.id)))
      .subscribe()
  }
}
