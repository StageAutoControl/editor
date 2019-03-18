import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {DMXDevice} from "../../api/dmx/dmx-device/dmx-device";
import {DMXDeviceService} from "../../api/dmx/dmx-device/dmx-device.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'dmx-device-select',
  templateUrl: './device-select.component.html',
  styleUrls: ['./device-select.component.less']
})
export class DeviceSelectComponent {
  devices$: Observable<DMXDevice[]>;

  @Input() allowEmpty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() form: FormGroup;

  constructor(
    private dmxDeviceService: DMXDeviceService
  ) {
    this.devices$ = dmxDeviceService.entities$;
  }

}
