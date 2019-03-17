import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DmxDevice} from "../../lib/api/dmx/dmx-device/dmx-device";
import {DmxDeviceService} from "../../lib/api/dmx/dmx-device/dmx-device.service";
import {DmxChannelValue} from "../../lib/api/dmx/dmx-channel-value";
import {DmxPlaygroundService} from "../../lib/api/dmx/dmx-playground.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.less']
})
export class PlaygroundComponent implements OnInit {
  device: DmxDevice;
  devices$: Observable<DmxDevice[]>;
  controllerError?: Error = null;

  constructor(
    private dmxDeviceService: DmxDeviceService,
    private dmxPlaygroundService: DmxPlaygroundService,
  ) {
    this.devices$ = dmxDeviceService.entities$;
  }

  ngOnInit() {
    this.dmxPlaygroundService
      .setDmxChannelValue({universe: 0, channel: 0, value: 0})
      .subscribe(null, (err: Error) => {
        if (err.message.includes('the ArtNet controller is not set')) {
          this.controllerError = err;
        }
      })
  }

  update(value: DmxChannelValue) {
    console.log(value);
    this.dmxPlaygroundService.setDmxChannelValue(value).subscribe();
  }
}
