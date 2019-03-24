import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'song-bar-change-form',
  templateUrl: './bar-change-form.component.html',
  styleUrls: ['./bar-change-form.component.less']
})
export class BarChangeFormComponent {
  @Input() form: FormGroup;
}
