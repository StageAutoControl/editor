import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'song-bar-change-list-form',
  templateUrl: './bar-change-list-form.component.html',
  styleUrls: ['./bar-change-list-form.component.less']
})
export class BarChangeListFormComponent {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  addBarChange() {
    this.form.push(this.setupBarChange());
  }

  removeBarChange(i: number) {
    this.form.removeAt(i);
  }

  private setupBarChange() {
    return this.formBuilder.group({
      at: [0, [Validators.required]],
      speed: [160, Validators.required],
      noteCount: [4, [Validators.required]],
      noteValue: [4, [Validators.required]],
    });
  }
}
