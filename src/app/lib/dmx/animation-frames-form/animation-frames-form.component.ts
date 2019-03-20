import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {paramsGroup} from "../forms";

@Component({
  selector: 'dmx-animation-frames-form',
  templateUrl: './animation-frames-form.component.html',
  styleUrls: ['./animation-frames-form.component.less']
})
export class AnimationFramesFormComponent implements OnInit {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    Array.from(this.form.value)
      .forEach(() => this.addFrame());
  }

  addFrame() {
    this.form.push(this.setupFrame());
  }

  removeFrame(i: number) {
    this.form.removeAt(i);
  }

  private setupFrame() {
    return this.formBuilder.group({
      at: [0, [Validators.required, Validators.min(0), Validators.max(255)]],
      params: this.formBuilder.group(paramsGroup(this.formBuilder)),
    });
  }


}
