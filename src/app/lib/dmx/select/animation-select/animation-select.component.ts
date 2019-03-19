import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {DMXAnimation} from "../../../api/dmx/dmx-animation/dmx-animation";
import {DMXAnimationService} from "../../../api/dmx/dmx-animation/dmx-animation.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'dmx-animation-select',
  templateUrl: './animation-select.component.html',
  styleUrls: ['./animation-select.component.less']
})
export class AnimationSelectComponent {
  animations$: Observable<DMXAnimation[]>;

  @Input() allowEmpty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() form: FormControl;

  constructor(
    private dmxAnimationService: DMXAnimationService
  ) {
    this.animations$ = dmxAnimationService.entities$;
  }

}
