import {Component, EventEmitter, Input, Output} from '@angular/core';
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

  @Output() changed: EventEmitter<void> = new EventEmitter<void>();

  add(value: number) {
    this.form.setValue(this.form.value + value);
  }

  emitChanged() {
    this.changed.emit();
  }
}
