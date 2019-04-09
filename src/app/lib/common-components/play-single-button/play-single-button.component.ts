import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DMXScene} from "../../api/dmx/dmx-scene/dmx-scene";
import {DMXPreset} from "../../api/dmx/dmx-preset/dmx-preset";
import {DMXPlaygroundService} from "../../api/dmx/dmx-playground/dmx-playground.service";

@Component({
  selector: 'app-play-single-button',
  templateUrl: './play-single-button.component.html',
  styleUrls: ['./play-single-button.component.less']
})
export class PlaySingleButtonComponent implements OnChanges {

  @Input() scene: DMXScene;
  @Input() preset: DMXPreset;

  constructor(
    private playgroundService: DMXPlaygroundService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.scene && this.preset) {
      throw new Error('Can only play a preset or a scene, not both');
    }
  }

  play() {
    if (this.scene) {
      this.playgroundService.playScene(this.scene.id).subscribe();
      return;
    }

    if (this.preset) {
      this.playgroundService.playPreset(this.preset.id).subscribe();
      return;
    }
  }
}
