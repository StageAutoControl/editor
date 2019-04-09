import {FormBuilder, Validators} from "@angular/forms";

export const paramsGroup = (fb: FormBuilder) => ({
  led: fb.control(null),
  $color: fb.control(null),
  red: fb.control(null),
  green: fb.control(null),
  blue: fb.control(null),
  white: fb.control(null),
  dimmer: fb.control(null),
  mode: fb.control(null),
  strobe: fb.control(null),
  tilt: fb.control(null),
  pan: fb.control(null),
});

export const ledGroup = (fb: FormBuilder) => ({
  red: fb.control(0, [Validators.required, Validators.min(0)]),
  green: fb.control(0, [Validators.required, Validators.min(0)]),
  blue: fb.control(0, [Validators.required, Validators.min(0)]),
  white: fb.control(0, [Validators.required, Validators.min(0)]),
});

export const deviceParamsGroup = (fb: FormBuilder) => ({
  group: fb.control(null),
  device: fb.control(null),
  animation: fb.control(null),
  transition: fb.control(null),
  params: fb.array([]),
});
