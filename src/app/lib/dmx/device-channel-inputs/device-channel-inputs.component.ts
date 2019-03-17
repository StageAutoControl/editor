import {Component, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChildren} from '@angular/core';
import {DmxDevice} from "../../api/dmx/dmx-device/dmx-device";
import {FormGroup} from "@angular/forms";
import {DmxDeviceTypeService} from "../../api/dmx/dmx-device-type/dmx-device-type.service";
import {DmxDeviceType} from "../../api/dmx/dmx-device-type/dmx-device-type";
import {MatInput} from "@angular/material";
import {DmxChannelValue} from "../../api/dmx/dmx-channel-value";

@Component({
  selector: 'app-device-channel-inputs',
  templateUrl: './device-channel-inputs.component.html',
  styleUrls: ['./device-channel-inputs.component.less']
})
export class DeviceChannelInputsComponent implements OnInit, OnChanges {
  @Input() device: DmxDevice;
  @Output() updateChannelValue = new EventEmitter<DmxChannelValue>();

  @ViewChildren(MatInput) inputs: QueryList<MatInput>;

  deviceType: DmxDeviceType;
  form: FormGroup;

  constructor(
    private deviceTypeService: DmxDeviceTypeService,
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inputs && this.inputs.forEach(i => i.value = '0');

    this.deviceTypeService
      .get(this.device.typeId)
      .subscribe(t => this.setupType(t));
  }

  private setupType(t: DmxDeviceType) {
    this.deviceType = t;
  }

  emitChange(channel: number, value: number) {
    this.updateChannelValue.emit({
      universe: this.device.universe,
      channel: this.device.startChannel + channel,
      value: value,
    })
  }
}
