export interface DMXDeviceParams{
  group?: DMXDeviceGroupSelector;
  device?: DMXDeviceSelector;
  params?: DMXParams[];
  animation?: DMXAnimationSelector;
  transition?: DMXTransitionSelector;
}

export interface DMXDeviceGroupSelector {
  id: string;
}

export interface DMXDeviceSelector {
  id?: string;
  tags?: string[];
}

export interface DMXAnimationSelector {
  id: string;
}

export interface DMXTransitionSelector {
  id: string;
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
