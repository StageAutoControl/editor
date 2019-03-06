import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'dmx-led-form',
  templateUrl: './led-form.component.html',
  styleUrls: ['./led-form.component.less']
})
export class LedFormComponent implements OnInit {
  @Input('group')
  public form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
