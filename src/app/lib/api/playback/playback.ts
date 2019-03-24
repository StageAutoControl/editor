import {ProcessStatus} from "../../controller/process";

export interface Params {
  song?: {
    id: string;
  };
  setList?: {
    id: string;
  };
}

export interface PlaybackStatus {
  process: ProcessStatus;
  params: Params;
}
