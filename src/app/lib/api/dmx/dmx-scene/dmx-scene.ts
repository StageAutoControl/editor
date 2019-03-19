import {DMXDeviceParams} from "../dmx-device-params";

export interface DMXScene {
  id?: string;
  name: string;
  noteValue: number;
  noteCount: number;
  subScenes: DMXSubScene[];
}

export interface DMXSubScene {
  at: number;
  deviceParams?: DMXDeviceParams[];
  preset?: string;
}
