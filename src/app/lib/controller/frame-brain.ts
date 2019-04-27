import {BarChange, Song} from "../api/song/song";


export interface FrameState {
  subFrame: number;
  frame: number;
  bar: number;
  lastBC: BarChange;
  framesEachBar: number;
}

interface StreamlinedBarChanges {
  [p: number]: BarChange | null
}

export class FrameBrain {
  public static renderFrames = 64;

  constructor(private song: Song) {
  }

  private get highestFrame(): number {
    return this.song.dmxScenes.reduce((prev, curr) => curr.at > prev ? curr.at : prev, 0) as number;
  }

  private get streamLineBarChanges(): StreamlinedBarChanges {
    const streamline: StreamlinedBarChanges = {};

    for (const bc of this.song.barChanges) {
      streamline[bc.at] = bc;
    }

    return streamline;
  }

  getStateAt(frame: number): FrameState {
    const bc = this.streamLineBarChanges;
    const h = this.highestFrame;
    const fs: FrameState = {
      subFrame: 0,
      frame: 0,
      bar: 0,
      lastBC: bc[0],
      framesEachBar: 0,
    };

    for (let i = 0; i <= h; i++) {
      fs.frame = i;

      if (i in bc) {
        fs.lastBC = bc[i];
        fs.framesEachBar = this.barLength(bc[i]);
        fs.bar++;
        fs.subFrame = 0;
      } else {
        fs.subFrame++;

        if (fs.subFrame >= fs.framesEachBar) {
          fs.bar++;
          fs.subFrame = 0;
        }
      }

      if (i === frame) {
        return fs;
      }
    }

    return fs;
  }

  barLength(bc: BarChange): number {
    return bc.noteCount * this.noteLength(bc);
  }

  noteLength(bc: BarChange): number {
    return FrameBrain.renderFrames / bc.noteValue;
  }
}
