import {BarChange, Song} from "../api/song/song";


export interface FrameState {
  subFrame: number;
  frame: number;
  bar: number;
  note: number;
  lastBC: BarChange;
  framesEachNote: number;
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
      note: 0,
      lastBC: bc[0],
      framesEachNote: 0,
    };

    for (let i = 0; i <= h; i++) {
      fs.frame = i;

      if (i in bc) {
        fs.lastBC = bc[i];
        fs.framesEachNote = this.barLength(bc[i]);
        fs.bar++;
        fs.note = 1;
        fs.subFrame = 0;
      } else {
        fs.note++;
        fs.subFrame++;

        if (fs.note > fs.framesEachNote) {
          fs.bar++;
          fs.note = 1;
          fs.subFrame = 0;
        }
      }

      if (i === frame) {
        return fs;
      }
    }
  }

  barLength(bc: BarChange): number {
    return bc.noteCount * this.noteLength(bc);
  }

  noteLength(bc: BarChange): number {
    return FrameBrain.renderFrames / bc.noteValue;
  }
}
