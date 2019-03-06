import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {DmxDevice} from "../dmx-device";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {DmxDeviceService} from "../dmx-device.service";

@Component({
  selector: 'app-dmx-device-list',
  templateUrl: './dmx-device-list.component.html',
  styleUrls: ['./dmx-device-list.component.less']
})
export class DmxDeviceListComponent implements OnInit {
  public dmxDevices$: Observable<DmxDevice[]>;
  displayedColumns: string[] = ['name', 'typeID', 'actions'];
  dataSource = new MatTableDataSource<DmxDevice>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dmxDeviceService: DmxDeviceService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dmxDevices$ = this.dmxDeviceService.entities$;

    this.dmxDevices$.subscribe((devices: DmxDevice[]) => {
      this.dataSource.data = devices as DmxDevice[];
    });

    this.load();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  load() {
    this.dmxDeviceService.getAll();
  }

  createEntity() {
    // this.dmxDeviceService
    //   .create({
    //     name: "test-device",
    //     typeID: "asdf",
    //   })
    //   .subscribe();
  }

  deleteEntity(id: string) {
    this.dmxDeviceService
      .remove(id)
      .subscribe();
  }
}
