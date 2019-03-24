import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Song} from "../../api/song/song";
import {FrameBrain, FrameState} from "../../controller/frame-brain";

@Component({
  selector: 'app-song-frame-state',
  templateUrl: './song-frame-state.component.html',
  styleUrls: ['./song-frame-state.component.less']
})
export class SongFrameStateComponent implements OnChanges {
  @Input() song: Song;
  @Input() frame: number;

  state: FrameState;
  ngOnChanges(changes: SimpleChanges): void {
    this.state = (new FrameBrain(this.song)).getStateAt(this.frame);

  }
}
