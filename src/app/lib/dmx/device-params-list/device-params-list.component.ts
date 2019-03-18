import {Component, Input, OnInit} from '@angular/core';
import {DMXDeviceParams} from "../../api/dmx/dmx-device-params";
import {DMXDeviceService} from "../../api/dmx/dmx-device/dmx-device.service";
import {DMXDeviceGroupService} from "../../api/dmx/dmx-device-group/dmx-device-group.service";
import {DMXAnimationService} from "../../api/dmx/dmx-animation/dmx-animation.service";
import {DMXTransitionService} from "../../api/dmx/dmx-transition/dmx-transition.service";
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'dmx-device-params-list',
  templateUrl: './device-params-list.component.html',
  styleUrls: ['./device-params-list.component.less']
})
export class DeviceParamsListComponent implements OnInit {

  @Input() paramsList: DMXDeviceParams[];

  constructor(
    private dmxDeviceService: DMXDeviceService,
    private dmxDeviceGroupService: DMXDeviceGroupService,
    private dmxAnimationService: DMXAnimationService,
    private dmxTransitionService: DMXTransitionService,
  ) {
  }

  ngOnInit(): void {
  }

  private getDMXDeviceGroup(id: string): Observable<string> {
    return this.dmxDeviceGroupService.entities$
      .pipe(switchMap(entities => of(entities.reduce((prev, current) => {
        return current.id === id ? current.name : prev
      }, ""))));
  }

  private getDMXDevice(id: string): Observable<string> {
    return this.dmxDeviceService.entities$
      .pipe(switchMap(entities => of(entities.reduce((prev, current) => {
        return current.id === id ? current.name : prev
      }, ""))));
  }

  private getDMXAnimation(id: string): Observable<string> {
    return this.dmxAnimationService.entities$
      .pipe(switchMap(entities => of(entities.reduce((prev, current) => {
        return current.id === id ? current.name : prev
      }, ""))));
  }

  private getDMXTransition(id: string): Observable<string> {
    return this.dmxTransitionService.entities$
      .pipe(switchMap(entities => of(entities.reduce((prev, current) => {
        return current.id === id ? current.name : prev
      }, ""))));
  }
}
