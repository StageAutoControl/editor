import {Validators} from "@angular/forms";

export const paramsGroup = {
  dimmer: [],
  mode: [],
  strobe: [],
  tilt: [],
  pan: [],
  led: [],
  $color: [],
  red: [],
  green: [],
  blue: [],
  white: [],
};

export const ledGroup = {
  red: [0, [Validators.required, Validators.min(0)]],
  green: [0, [Validators.required, Validators.min(0)]],
  blue: [0, [Validators.required, Validators.min(0)]],
  white: [0, [Validators.required, Validators.min(0)]],
};
