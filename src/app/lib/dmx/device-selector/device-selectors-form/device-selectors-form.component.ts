import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {DMXDeviceService} from "../../../api/dmx/dmx-device/dmx-device.service";

@Component({
  selector: 'dmx-device-selectors-form',
  templateUrl: './device-selectors-form.component.html',
  styleUrls: ['./device-selectors-form.component.less']
})
export class DeviceSelectorsFormComponent implements OnInit {
  @Input('form') public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private dmxDeviceService: DMXDeviceService,
  ) {
  }

  ngOnInit() {
    Array.from(this.form.value).forEach(() => this.addDeviceSelector());
  }

  private setupDeviceSelector() {
    return this.formBuilder.group({
      id: [""],
      tags: [[]],
    });
  }

  addDeviceSelector() {
    this.form.push(this.setupDeviceSelector());
  }

  removeDeviceSelector(i: number) {
    this.form.removeAt(i);
  }


}
