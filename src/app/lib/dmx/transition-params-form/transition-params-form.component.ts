import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {paramsGroup} from "../forms";

@Component({
  selector: 'dmx-transition-params-form',
  templateUrl: './transition-params-form.component.html',
  styleUrls: ['./transition-params-form.component.less']
})
export class TransitionParamsFormComponent implements OnInit {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    Array.from(this.form.value)
      .forEach(() => this.addParams());
  }

  private setupParams() {
    return this.formBuilder.group({
      from: this.formBuilder.group(paramsGroup(this.formBuilder)),
      to: this.formBuilder.group(paramsGroup(this.formBuilder)),
    });
  }

  addParams() {
    this.form.push(this.setupParams());
  }

  removeParams(i: number) {
    this.form.removeAt(i);
  }


}
