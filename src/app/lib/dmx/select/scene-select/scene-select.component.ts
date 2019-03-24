import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {DMXScene} from "../../../api/dmx/dmx-scene/dmx-scene";
import {DMXSceneService} from "../../../api/dmx/dmx-scene/dmx-scene.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'dmx-scene-select',
  templateUrl: './scene-select.component.html',
  styleUrls: ['./scene-select.component.less']
})
export class SceneSelectComponent {
  scenes$: Observable<DMXScene[]>;

  @Input() allowEmpty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() form: FormControl;

  constructor(
    private dmxSceneService: DMXSceneService
  ) {
    this.scenes$ = dmxSceneService.entities$;
  }

}
