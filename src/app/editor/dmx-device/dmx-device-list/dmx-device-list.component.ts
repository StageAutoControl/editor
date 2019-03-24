import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {DMXDevice} from "../../../lib/api/dmx/dmx-device/dmx-device";
import {DMXDeviceType} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type";
import {DMXDeviceService} from "../../../lib/api/dmx/dmx-device/dmx-device.service";
import {DMXDeviceTypeService} from "../../../lib/api/dmx/dmx-device-type/dmx-device-type.service";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {SortingDataAccessor} from "../../sorting-data-accessor";

@Component({
  selector: 'app-dmx-device-list',
  templateUrl: './dmx-device-list.component.html',
  styleUrls: ['./dmx-device-list.component.less']
})
export class DMXDeviceListComponent implements OnInit {
  entities$: Observable<DMXDevice[]>;
  dmxDeviceTypes: { [id: string]: DMXDeviceType } = {};
  displayedColumns: string[] = ['name', 'typeId', 'universe', 'startChannel', 'tags', 'actions'];
  dataSource = new MatTableDataSource<DMXDevice>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxDeviceService: DMXDeviceService,
    private dmxDeviceTypeService: DMXDeviceTypeService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.sort({id: 'name', start: 'asc', disableClear: false});
    this.dataSource.sortingDataAccessor = SortingDataAccessor;
    this.entities$ = this.dmxDeviceService.entities$;

    this.dmxDeviceTypeService.entities$
      .subscribe((types: DMXDeviceType[]) => {
        types.forEach((t: DMXDeviceType) => this.dmxDeviceTypes[t.id] = t);
      });

    this.entities$.subscribe((devices: DMXDevice[]) => {
      this.dataSource.data = devices;
    });
  }

  getDMXDeviceType(id: string): DMXDeviceType | null {
    if (!(id in this.dmxDeviceTypes)) {
      return null;
    }

    return this.dmxDeviceTypes[id];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEntity(entity: DMXDevice) {
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
