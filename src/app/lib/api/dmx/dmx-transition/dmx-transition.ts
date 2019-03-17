import {DMXParams} from "../dmx-device-params";

export interface DMXTransition {
  id?: string;
  name: string;
  ease: string;
  length: number;
  params: DMXTransitionParams[];
}

export interface DMXTransitionParams {
  from: DMXParams;
  to: DMXParams;
}
