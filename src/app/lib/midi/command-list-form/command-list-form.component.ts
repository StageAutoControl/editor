import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'midi-command-list-form',
  templateUrl: './command-list-form.component.html',
  styleUrls: ['./command-list-form.component.less']
})
export class CommandListFormComponent {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  addCommand() {
    this.form.push(this.setupCommand());
  }

  removeCommand(i: number) {
    this.form.removeAt(i);
  }

  private setupCommand() {
    return this.formBuilder.group({
      at: [0, [Validators.required]],
      status: [0, [Validators.required]],
      data1: [0, [Validators.required]],
      data2: [0, [Validators.required]],
    });
  }


}
