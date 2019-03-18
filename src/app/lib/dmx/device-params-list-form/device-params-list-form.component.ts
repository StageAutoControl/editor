import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {deviceParamsGroup, paramsGroup} from "../forms";

@Component({
  selector: 'dmx-device-params-list-form',
  templateUrl: './device-params-list-form.component.html',
  styleUrls: ['./device-params-list-form.component.less']
})
export class DeviceParamsListFormComponent {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  private setupDeviceParams() {
    return this.formBuilder.group(deviceParamsGroup(this.formBuilder));
  }

  addDeviceParams(paramsLength: number = 0) {
    console.log('params', paramsLength);
    this.form.push(this.setupDeviceParams());

    const deviceParamsControl = this.form.at(this.form.length - 1) as FormGroup;
    const paramsControl = deviceParamsControl.controls.params as FormArray;
    for (let x = 0; x < paramsLength; x++) {
      paramsControl.push(this.formBuilder.group(paramsGroup(this.formBuilder)));
    }
  }

  removeDeviceParams(i: number) {
    this.form.removeAt(i);
  }


}
