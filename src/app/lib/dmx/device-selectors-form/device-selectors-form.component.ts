import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'dmx-device-selectors-form',
  templateUrl: './device-selectors-form.component.html',
  styleUrls: ['./device-selectors-form.component.less']
})
export class DeviceSelectorsFormComponent implements OnInit {
  @Input('array') public form: FormArray;
  @Input('choices') choices$: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
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
