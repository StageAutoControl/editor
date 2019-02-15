import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DmxDevice} from "../dmx-device";
import {MatTableDataSource} from "@angular/material";
import {DmxDeviceService} from "../dmx-device.service";

@Component({
  selector: 'app-dmx-device-list',
  templateUrl: './dmx-device-list.component.html',
  styleUrls: ['./dmx-device-list.component.less']
})
export class DmxDeviceListComponent implements OnInit {
  public dmxDevices$: Observable<DmxDevice[]>;
  displayedColumns: string[] = ['id', 'name', 'typeID'];
  dataSource = new MatTableDataSource();

  constructor(private dmxDeviceService: DmxDeviceService) {
  }

  ngOnInit() {
    this.dmxDevices$ = this.dmxDeviceService.entities$;
    this.dmxDeviceService.getAll();

    this.dmxDevices$.subscribe((devices: DmxDevice[]) => {
      this.dataSource.data = devices as DmxDevice[];
      console.log(`Loaded ${devices.length} devices`);
    })
  }

  create() {
    this.dmxDeviceService.create({
      id: "asdf-" + Math.floor(Math.random() * 10000000) + 1,
      name: "test-device",
      typeID: "asdf",
    }).subscribe();
  }
}
