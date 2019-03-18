import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {DMXTransition} from "../../api/dmx/dmx-transition/dmx-transition";
import {DMXTransitionService} from "../../api/dmx/dmx-transition/dmx-transition.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'dmx-transition-select',
  templateUrl: './transition-select.component.html',
  styleUrls: ['./transition-select.component.less']
})
export class TransitionSelectComponent {
  transitions$: Observable<DMXTransition[]>;

  @Input() allowEmpty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() form: FormGroup;

  constructor(
    private dmxTransitionService: DMXTransitionService
  ) {
    this.transitions$ = dmxTransitionService.entities$;
  }
}
