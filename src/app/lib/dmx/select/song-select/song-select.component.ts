import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Song} from "../../../api/song/song";
import {SongService} from "../../../api/song/song.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'dmx-song-select',
  templateUrl: './song-select.component.html',
  styleUrls: ['./song-select.component.less']
})
export class SongSelectComponent {
  songs$: Observable<Song[]>;

  @Input() allowEmpty: boolean = false;
  @Input() disabled: boolean = false;
  @Input() form: FormControl;

  constructor(
    private dmxSongService: SongService
  ) {
    this.songs$ = dmxSongService.entities$;
    // .pipe(map(sortByName))
  }

}
