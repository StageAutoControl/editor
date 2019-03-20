import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {paramsGroup} from "../forms";

@Component({
  selector: 'dmx-params-list-form',
  templateUrl: './params-list-form.component.html',
  styleUrls: ['./params-list-form.component.less']
})
export class ParamsListFormComponent {
  @Input() form: FormArray;
  @Input() disabled: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  addParams() {
    this.form.push(this.setupParams());
  }

  removeParams(i: number) {
    this.form.removeAt(i);
  }

  private setupParams() {
    return this.formBuilder.group(paramsGroup(this.formBuilder));
  }


}
