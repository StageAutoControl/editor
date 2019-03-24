import {barLength, FrameBrain} from "./frame-brain";
import {BarChange} from "../api/song/song";

describe('FrameBrain', () => {
  let frameBrain: FrameBrain;

  beforeEach(() => {
    frameBrain = new FrameBrain();
  });

  it('should ', function () {

  });
});

describe('barLength', () => {
  it('should calculate correctly', () => {
    const cases: { bc: BarChange, len: number }[] = [
      {bc: {at: 0, noteCount: 3, noteValue: 4}, len: 48},
      {bc: {at: 63, noteCount: 12, noteValue: 8}, len: 96},
      {bc: {at: 10, noteCount: 11, noteValue: 4}, len: 176},
      {bc: {at: 104, noteCount: 4, noteValue: 4}, len: 64},
      {bc: {at: 5, noteCount: 9, noteValue: 8}, len: 72},
    ];

    for (let c of cases) {
      const res = barLength(c.bc);
      expect(res).toEqual(c.len);
    }
  })
});
