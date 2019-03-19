import {FormBuilder, Validators} from "@angular/forms";

export const paramsGroup = (fb: FormBuilder) => ({
  dimmer: fb.control(0),
  mode: fb.control(0),
  strobe: fb.control(0),
  tilt: fb.control(0),
  pan: fb.control(0),
  led: fb.control(0),
  $color: fb.control(0),
  red: fb.control(0),
  green: fb.control(0),
  blue: fb.control(0),
  white: fb.control(0),
});

export const ledGroup = (fb: FormBuilder) => ({
  red: fb.control(0, [Validators.required, Validators.min(0)]),
  green: fb.control(0, [Validators.required, Validators.min(0)]),
  blue: fb.control(0, [Validators.required, Validators.min(0)]),
  white: fb.control(0, [Validators.required, Validators.min(0)]),
});

export const deviceParamsGroup = (fb: FormBuilder) => ({
  group: fb.control(''),
  device: fb.control(''),
  animation: fb.control(''),
  transition: fb.control(''),
  params: fb.array([]),
});
