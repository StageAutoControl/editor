import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "../../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {filter, switchMap} from "rxjs/operators";
import {DMXDeviceGroup} from "../../../lib/api/dmx/dmx-device-group/dmx-device-group";
import {DMXDeviceGroupService} from "../../../lib/api/dmx/dmx-device-group/dmx-device-group.service";
import {DMXDeviceService} from "../../../lib/api/dmx/dmx-device/dmx-device.service";

@Component({
  selector: 'app-dmx-device-group-list',
  templateUrl: './dmx-device-group-list.component.html',
  styleUrls: ['./dmx-device-group-list.component.less']
})
export class DMXDeviceGroupListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'selectors', 'actions'];
  dataSource = new MatTableDataSource<DMXDeviceGroup>();

  dmxDeviceGroups$: Observable<DMXDeviceGroup[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dmxDeviceGroupService: DMXDeviceGroupService,
    private dmxDeviceService: DMXDeviceService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dmxDeviceGroups$ = this.dmxDeviceGroupService.entities$;
    this.dmxDeviceGroups$.subscribe((group: DMXDeviceGroup[]) => this.dataSource.data = group);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEntity(entity: DMXDeviceGroup) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          action: `delete DMXDeviceGroup ${entity.name}`,
        },
      })
      .afterClosed()
      .pipe(filter((result: boolean) => result))
      .pipe(switchMap(() => this.dmxDeviceGroupService.remove(entity.id)))
      .subscribe()
  }
}
