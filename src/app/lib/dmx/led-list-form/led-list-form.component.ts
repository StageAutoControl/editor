import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";
import {ledGroup} from "../forms";

@Component({
  selector: 'dmx-led-list-form',
  templateUrl: './led-list-form.component.html',
  styleUrls: ['./led-list-form.component.less']
})
export class LedListFormComponent implements OnInit {
  @Input('array')
  public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    Array.from(this.form.value)
      .forEach(() => this.addLED());
  }

  private setupLED() {
    return this.formBuilder.group(ledGroup);
  }

  addLED() {
    this.form.push(this.setupLED());
  }

  removeLED(i: number) {
    this.form.removeAt(i);
  }


}
