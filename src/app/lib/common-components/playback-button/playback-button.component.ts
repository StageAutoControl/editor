import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Song} from "../../api/song/song";
import {PlaybackService} from "../../api/playback/playback.service";
import {Observable} from "rxjs";
import {PlaybackStatus} from "../../api/playback/playback";
import {SetList} from "../../api/set-list/set-list";

@Component({
  selector: 'app-playback-button',
  templateUrl: './playback-button.component.html',
  styleUrls: ['./playback-button.component.less']
})
export class PlaybackButtonComponent implements OnInit, OnChanges {

  @Input() song: Song;
  @Input() setList: SetList;

  status$: Observable<PlaybackStatus>;

  constructor(
    private playbackService: PlaybackService,
  ) {
  }

  ngOnInit() {
    this.status$ = this.playbackService.status$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.song && this.setList) {
      throw new Error('Can only play a song or a set list, not both');
    }
  }

  start() {
    if (this.song) {
      this.playbackService.start({song: {id: this.song.id}});
    } else if (this.setList) {
      this.playbackService.start({setList: {id: this.song.id}});
    }
  }

  stop() {
    this.playbackService.stop();
  }

  isOwn(s: PlaybackStatus): boolean {
    if (this.song) {
      return s.params.song.id === this.song.id;
    } else {
      return s.params.setList.id === this.setList.id;
    }
  }
}
