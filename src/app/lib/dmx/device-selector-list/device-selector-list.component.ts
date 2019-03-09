import {Component, Input, OnInit} from '@angular/core';
import {DmxDeviceSelector} from "../../api/dmx/dmx-device-group/dmx-device-group";
import {DmxDeviceService} from "../../api/dmx/dmx-device/dmx-device.service";
import {DmxDevice} from "../../api/dmx/dmx-device/dmx-device";

@Component({
  selector: 'app-device-selector-list',
  templateUrl: './device-selector-list.component.html',
  styleUrls: ['./device-selector-list.component.less']
})
export class DeviceSelectorListComponent implements OnInit {
  @Input() selectors: DmxDeviceSelector[];

  private dmxDevices: DmxDevice[];
  tagSelectors: DmxDeviceSelector[];
  idSelectors: DmxDeviceSelector[];

  constructor(
    private dmxDeviceService: DmxDeviceService,
  ) {
  }

  ngOnInit(): void {
    this.idSelectors = this.selectors.slice().filter(s => !!s.id);
    this.tagSelectors = this.selectors.slice().filter(s => !!s.tags);
    this.dmxDeviceService.entities$.subscribe((ds: DmxDevice[]) => this.dmxDevices = ds);
  }

  deviceName(sel: DmxDeviceSelector): string {
    const device = this.dmxDevices.reduce(((previous, current) => current.id == sel.id ? current : previous), null);
    return device ? device.name : 'NOT FOUND';
  }
}
