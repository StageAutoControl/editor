import {DMXDeviceParams} from "../dmx-device-params";

export interface DMXPreset {
  id?: string;
  name: string;
  deviceParams: DMXDeviceParams[];
}
