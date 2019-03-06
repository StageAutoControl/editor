import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

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
    return this.formBuilder.group({
      red: [0, Validators.required],
      green: [0, Validators.required],
      blue: [0, Validators.required],
      white: [0, Validators.required],
    });
  }

  addLED() {
    this.form.push(this.setupLED());
  }

  removeLED(i: number) {
    this.form.removeAt(i);
  }


}
