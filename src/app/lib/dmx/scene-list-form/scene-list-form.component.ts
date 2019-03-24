import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'dmx-scene-list-form',
  templateUrl: './scene-list-form.component.html',
  styleUrls: ['./scene-list-form.component.less']
})
export class SceneListFormComponent {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  addScene() {
    this.form.push(this.setupScene());
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
