import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Song} from "../../api/song/song";

@Component({
  selector: 'app-frame-input',
  templateUrl: './frame-input.component.html',
  styleUrls: ['./frame-input.component.less']
})
export class FrameInputComponent implements OnInit, OnChanges {

  @Input() form: FormControl;
  @Input() song: Song;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.song);
  }

}
