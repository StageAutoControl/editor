import {Component, OnInit} from '@angular/core';
import {PlaybackService} from "../../api/playback/playback.service";
import {Observable} from "rxjs";
import {PlaybackStatus} from "../../api/playback/playback";

@Component({
  selector: 'app-playback-infos',
  templateUrl: './playback-infos.component.html',
  styleUrls: ['./playback-infos.component.less']
})
export class PlaybackInfosComponent implements OnInit {
  status$: Observable<PlaybackStatus>;

  constructor(
    private playbackService: PlaybackService,
  ) {
    this.status$ = playbackService.status$;
  }

  ngOnInit() {
  }

  getActiveID(s: PlaybackStatus): string {
    return s.params.song.id !== "" ? s.params.song.id : s.params.setList.id;
  }

  getActiveType(s: PlaybackStatus): string {
    if (s.params.song.id === "" && s.params.setList.id === "") {
      return 'None';
    }

    return s.params.song.id !== "" ? 'Song' : 'Set List';
  }
}
