import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXDeviceType} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type";
import {DMXDeviceTypeService} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type.service";

@Component({
  selector: 'app-dmx-device-type-list',
  templateUrl: './dmx-device-type-list.component.html',
  styleUrls: ['./dmx-device-type-list.component.less']
})
export class DMXDeviceTypeListComponent implements OnInit {
  public dmxDevices$: Observable<DMXDeviceType[]>;
  displayedColumns: string[] = ['name', 'channelCount', 'channelsPerLED', 'leds', 'strobe', 'dimmer', 'mode', 'moving', 'actions'];
  dataSource = new MatTableDataSource<DMXDeviceType>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxDeviceTypeService: DMXDeviceTypeService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }

      return data[sortHeaderId];
    };
    this.dmxDevices$ = this.dmxDeviceTypeService.entities$;

    this.dmxDevices$.subscribe((devices: DMXDeviceType[]) => {
      this.dataSource.data = devices as DMXDeviceType[];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEntity(entity: DMXDeviceType) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXDeviceType ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxDeviceTypeService.remove(entity.id)))
      .subscribe()
  }
}
