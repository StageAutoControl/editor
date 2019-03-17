import {DMXParams} from "../dmx-device-params";

export interface DMXAnimation {
  id?: string;
  name: string;
  frames: DMXAnimationFrame[];
}

export interface DMXAnimationFrame {
  at: number;
  params: DMXParams;
}
