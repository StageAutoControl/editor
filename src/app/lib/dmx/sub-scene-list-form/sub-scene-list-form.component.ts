import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {deviceParamsGroup, paramsGroup} from "../forms";

@Component({
  selector: 'dmx-sub-scene-list-form',
  templateUrl: './sub-scene-list-form.component.html',
  styleUrls: ['./sub-scene-list-form.component.less']
})
export class SubSceneListFormComponent implements OnInit {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    Array.from(this.form.value)
      .forEach(() => this.addSubScene());
  }

  addSubScene(deviceParamsLength: number = 0, paramsLength: number[] = []) {
    this.form.push(this.setupSubScene());

    const subScenes = this.form.at(this.form.length - 1) as FormGroup;
    const deviceParamsList = subScenes.controls.deviceParams as FormArray;
    for (let x = 0; x < deviceParamsLength; x++) {
      deviceParamsList.push(this.formBuilder.group(deviceParamsGroup(this.formBuilder)));
      const deviceParamsControl = deviceParamsList.at(deviceParamsList.length - 1) as FormGroup;

      for (let y = 0; y < paramsLength[x]; y++) {
        const paramsList = deviceParamsControl.controls.params as FormArray;
        paramsList.push(this.formBuilder.group(paramsGroup(this.formBuilder)));
      }
    }
  }

  removeSubScene(i: number) {
    this.form.removeAt(i);
  }

  private setupSubScene() {
    return this.formBuilder.group({
      at: this.formBuilder.control([]),
      preset: this.formBuilder.control(''),
      deviceParams: this.formBuilder.array([]),
    });
  }


}
