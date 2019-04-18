import {Component, Input, OnInit} from '@angular/core';
import {DMXDeviceSelector} from "../../../api/dmx/dmx-device-group/dmx-device-group";
import {DMXDeviceService} from "../../../api/dmx/dmx-device/dmx-device.service";
import {DMXDevice} from "../../../api/dmx/dmx-device/dmx-device";

@Component({
  selector: 'app-device-selector-list',
  templateUrl: './device-selector-list.component.html',
  styleUrls: ['./device-selector-list.component.less']
})
export class DeviceSelectorListComponent implements OnInit {
  @Input() selectors: DMXDeviceSelector[];
  tagSelectors: DMXDeviceSelector[];
  idSelectors: DMXDeviceSelector[];
  private dmxDevices: DMXDevice[];

  constructor(
    private dmxDeviceService: DMXDeviceService,
  ) {
  }

  ngOnInit(): void {
    this.idSelectors = this.selectors.slice().filter(s => !!s.id);
    this.tagSelectors = this.selectors.slice().filter(s => !!s.tags);
    this.dmxDeviceService.entities$.subscribe((ds: DMXDevice[]) => this.dmxDevices = ds);
  }

  deviceName(sel: DMXDeviceSelector): string {
    const device = this.dmxDevices.reduce(((previous, current) => current.id == sel.id ? current : previous), null);
    return device ? device.name : 'NOT FOUND';
  }
}
