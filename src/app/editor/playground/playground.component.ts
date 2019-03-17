import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DMXDevice} from "../../lib/api/dmx/dmx-device/dmx-device";
import {DMXDeviceService} from "../../lib/api/dmx/dmx-device/dmx-device.service";
import {DMXChannelValue} from "../../lib/api/dmx/dmx-playground/dmx-channel-value";
import {DMXPlaygroundService} from "../../lib/api/dmx/dmx-playground/dmx-playground.service";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.less']
})
export class PlaygroundComponent implements OnInit {
  device: DMXDevice;
  devices$: Observable<DMXDevice[]>;
  controllerError?: Error = null;

  constructor(
    private dmxDeviceService: DMXDeviceService,
    private dmxPlaygroundService: DMXPlaygroundService,
  ) {
    this.devices$ = dmxDeviceService.entities$;
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

  update(value: DMXChannelValue) {
    console.log(value);
    this.dmxPlaygroundService.setDMXChannelValue(value).subscribe();
  }
}
