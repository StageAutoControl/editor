import {DMXDeviceParams} from "../dmx/dmx-device-params";

export interface Song {
  id?: string;
  name: string;
  barChanges: BarChange[];
  dmxScenes: DMXScenePosition[];
  dmxDeviceParams: DMXDeviceParams[];
  midiCommands: MIDICommand[];
}

export interface BarChange {
  at: number;
  noteValue: number;
  noteCount: number;
  speed: number;
}

export interface DMXScenePosition {
  id: string;
  at: number;
  repeat: number;
  marker: string;
}

export interface MIDICommand {
  at: number;
  status: number;
  data1: number;
  data2: number;
}
