export interface DMXDeviceParams {
  group?: string;
  device?: string;
  params?: DMXParams[];
  animation?: string;
  transition?: string;
}

export interface DMXParams {
  led: number;
  $color?: string;
  red?: number;
  green?: number;
  blue?: number;
  white?: number;
  pan?: number;
  tilt?: number;
  strobe?: number;
  preset?: number;
  dimmer?: number;
}
