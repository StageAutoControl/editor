import {Component, Input} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'dmx-scene-list-form',
  templateUrl: './scene-list-form.component.html',
  styleUrls: ['./scene-list-form.component.less']
})
export class SceneListFormComponent {
  @Input() public form: FormArray;

  private sortCompare = (a, b) => (0 + a.value.at) - (0 + b.value.at);

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  addScene() {
    const scene = this.setupScene();
    scene.patchValue({at: this.nextFullAt});
    this.form.push(scene);
    setTimeout(() => this.sort());
  }

  get maxAt() {
    return this.form.controls.reduce((prev: number, curr: AbstractControl) => prev > (0 + curr.value.at) ? prev : curr.value.at, 0)
  }

  get nextFullAt() {
    const max = this.maxAt + 64;
    return max - max % 64;
  }

  private sort() {
    this.form.controls = this.form.controls.sort(this.sortCompare);
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
