import {Component, Input, OnInit} from '@angular/core';
import {Song} from "../../api/song/song";
import {PlaybackService} from "../../api/playback/playback.service";
import {Observable} from "rxjs";
import {PlaybackStatus} from "../../api/playback/playback";

@Component({
  selector: 'app-playback-button',
  templateUrl: './playback-button.component.html',
  styleUrls: ['./playback-button.component.less']
})
export class PlaybackButtonComponent implements OnInit {

  @Input() song: Song;

  status$: Observable<PlaybackStatus>;

  constructor(
    private playbackService: PlaybackService,
  ) {
  }

  ngOnInit() {
    this.status$ = this.playbackService.status$;

    this.status$.subscribe(s => console.log(s));
  }

  start() {
    this.playbackService.start({song: {id: this.song.id}});
  }

  stop() {
    this.playbackService.stop();
  }

  isOwn(s: PlaybackStatus): boolean {
    return s.params.song.id === this.song.id;
  }
}
