import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DMXPlaygroundService} from "../../lib/api/dmx/dmx-playground/dmx-playground.service";
import {DMXScene} from "../../lib/api/dmx/dmx-scene/dmx-scene";
import {DMXSceneService} from "../../lib/api/dmx/dmx-scene/dmx-scene.service";

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.less']
})
export class LiveComponent implements OnInit {
  scenes$: Observable<DMXScene[]>;
  controllerError?: Error = null;

  constructor(
    private dmxSceneService: DMXSceneService,
    private dmxPlaygroundService: DMXPlaygroundService,
  ) {
    this.scenes$ = dmxSceneService.entities$;
  }

  ngOnInit() {
    this.dmxPlaygroundService
      .setDMXChannelValue({universe: 0, channel: 0, value: 0})
      .subscribe(null, (err: Error) => {
        if (err.message.includes('the ArtNet controller is not set')) {
          this.controllerError = err;
        }
      })
  }

  playScene(scene: DMXScene) {
    this.dmxPlaygroundService.playScene(scene.id).subscribe();
  }
}
