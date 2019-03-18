import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {DMXDeviceGroup} from "../../api/dmx/dmx-device-group/dmx-device-group";
import {DMXDeviceGroupService} from "../../api/dmx/dmx-device-group/dmx-device-group.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'dmx-device-group-select',
  templateUrl: './device-group-select.component.html',
  styleUrls: ['./device-group-select.component.less']
})
export class DeviceGroupSelectComponent {
  deviceGroups$: Observable<DMXDeviceGroup[]>;

  @Input() allowEmpty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() form: FormGroup;

  constructor(
    private dmxDeviceGroupService: DMXDeviceGroupService
  ) {
    this.deviceGroups$ = dmxDeviceGroupService.entities$;
  }
}
