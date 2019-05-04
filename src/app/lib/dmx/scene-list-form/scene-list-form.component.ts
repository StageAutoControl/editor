import {Component, Input} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder} from "@angular/forms";
import {FrameBrain} from "../../controller/frame-brain";
import {DMXScenePosition} from "../../api/song/song";

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

  get maxAt() {
    return this.form.controls.reduce((prev: number, curr: AbstractControl) => prev > (0 + curr.value.at) ? prev : curr.value.at, 0);
  }

  get nextFullAt() {
    const state = (new FrameBrain(this.form.parent.value)).getStateAt(this.maxAt);
    return state.frame + (state.framesEachBar - state.subFrame);
  }

  copyScene(i: number) {
    this.addScene(this.form.at(i).value);
  }

  addScene(value: DMXScenePosition = null) {
    const scene = this.setupScene();
    if (value) {
      const state = (new FrameBrain(this.form.parent.value)).getStateAt(value.at);
      value.at += state.framesEachBar;
      scene.patchValue(value);
    } else {
      scene.patchValue({at: this.nextFullAt})
    }

    this.form.push(scene);
    // setTimeout(() => this.sort());
  }

  removeScene(i: number) {
    this.form.removeAt(i);
  }

  // private sortCompare = (a, b) => (0 + a.value.at) - (0 + b.value.at);
  //
  // private sort() {
  //   this.form.controls = this.form.controls.sort(this.sortCompare);
  // }

  private setupScene() {
    return this.formBuilder.group({
      id: this.formBuilder.control(''),
      at: this.formBuilder.control(0),
      repeat: this.formBuilder.control(0),
    });
  }
}
