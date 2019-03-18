import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'dmx-device-params-form',
  templateUrl: './device-params-form.component.html',
  styleUrls: ['./device-params-form.component.less']
})
export class DeviceParamsFormComponent {
  @Input() form: FormGroup;

  isSet(val: { id: string }) {
    return val ? !!val.id : false;
  }

  isSetArray(val: Array<any>) {
    return val && val.length > 0;
  }
}
