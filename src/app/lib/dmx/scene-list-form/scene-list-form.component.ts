import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'dmx-scene-list-form',
  templateUrl: './scene-list-form.component.html',
  styleUrls: ['./scene-list-form.component.less']
})
export class SceneListFormComponent implements OnChanges {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.valueChanges.subscribe(() => this.sort());
  }

  addScene() {
    this.form.push(this.setupScene());
    setTimeout(() => this.sort());
  }

  private sort() {
    this.form.controls = this.form.controls.sort((a, b) => (0 + a.value.at) - (0 + b.value.at));
  }

  removeScene(i: number) {
    this.form.removeAt(i);
  }

  private setupScene() {
    return this.formBuilder.group({
      id: this.formBuilder.control(''),
      at: this.formBuilder.control(0),
      repeat: this.formBuilder.control(0),
    });
  }


}
