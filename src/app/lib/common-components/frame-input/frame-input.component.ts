import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Song} from "../../api/song/song";

@Component({
  selector: 'app-frame-input',
  templateUrl: './frame-input.component.html',
  styleUrls: ['./frame-input.component.less']
})
export class FrameInputComponent {

  @Input() form: FormControl;
  @Input() song: Song;

}
