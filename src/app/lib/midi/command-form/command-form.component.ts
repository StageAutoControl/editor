import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'midi-command-form',
  templateUrl: './command-form.component.html',
  styleUrls: ['./command-form.component.less']
})
export class CommandFormComponent {
  @Input() form: FormGroup;
}
