import {Component, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChildren} from '@angular/core';
import {DMXDevice} from "../../api/dmx/dmx-device/dmx-device";
import {FormGroup} from "@angular/forms";
import {DMXDeviceTypeService} from "../../api/dmx/dmx-device-type/dmx-device-type.service";
import {DMXDeviceType} from "../../api/dmx/dmx-device-type/dmx-device-type";
import {MatInput} from "@angular/material";
import {DMXChannelValue} from "../../api/dmx/dmx-playground/dmx-channel-value";

@Component({
  selector: 'app-device-channel-inputs',
  templateUrl: './device-channel-inputs.component.html',
  styleUrls: ['./device-channel-inputs.component.less']
})
export class DeviceChannelInputsComponent implements OnInit, OnChanges {
  @Input() device: DMXDevice;
  @Output() updateChannelValue = new EventEmitter<DMXChannelValue>();

  @ViewChildren(MatInput) inputs: QueryList<MatInput>;

  deviceType: DMXDeviceType;
  form: FormGroup;

  constructor(
    private deviceTypeService: DMXDeviceTypeService,
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

  emitChange(channel: number, value: number) {
    this.updateChannelValue.emit({
      universe: this.device.universe,
      channel: this.device.startChannel + channel,
      value: value,
    })
  }

  private setupType(t: DMXDeviceType) {
    this.deviceType = t;
  }
}
