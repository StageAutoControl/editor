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

  getStateAt(frame: number): FrameState {
    // console.log('song ', this.song);
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
      fs.subFrame = fs.frame % 64;

      if (i in bc) {
        fs.lastBC = bc[i];
        fs.framesEachNote = this.barLength(bc[i]);
        fs.bar++;
        fs.note = 1;
      } else {
        fs.note++;

        if (fs.note > fs.framesEachNote) {
          fs.bar++;
          fs.note = 1;
        }
      }

      if (i === frame) {
        return fs;
      }
    }
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

  barLength(bc: BarChange): number {
    return bc.noteCount * this.noteLength(bc);
  }

  noteLength(bc: BarChange): number {
    return FrameBrain.renderFrames / bc.noteValue;
  }
}
