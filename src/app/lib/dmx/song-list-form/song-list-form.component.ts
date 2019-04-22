import {Component, Input} from '@angular/core';
import {FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'dmx-song-list-form',
  templateUrl: './song-list-form.component.html',
  styleUrls: ['./song-list-form.component.less']
})
export class SongListFormComponent {
  @Input() public form: FormArray;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  addSong() {
    this.form.push(this.setupSong());
  }

  removeSong(i: number) {
    this.form.removeAt(i);
  }

  private setupSong() {
    return this.formBuilder.control('');
  }
}
