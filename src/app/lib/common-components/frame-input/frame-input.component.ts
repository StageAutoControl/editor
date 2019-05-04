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

  add(diff: number) {
    let value = this.form.value + diff;
    if (value < 0) {
      value = 0;
    }

    this.form.setValue(value);
  }

  emitChanged() {
    this.changed.emit();
  }
}
