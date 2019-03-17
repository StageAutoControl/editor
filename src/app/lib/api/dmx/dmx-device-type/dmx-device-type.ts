export interface DMXDeviceType {
  id?: string;
  name: string;
  channelCount: number;
  channelsPerLED: number;
  strobeEnabled: boolean;
  strobeChannel: number;
  dimmerEnabled: boolean;
  dimmerChannel: number;
  modeEnabled: boolean;
  modeChannel: number;
  moving: boolean;
  tiltChannel: number;
  panChannel: number;
  leds: LED[];
}

export interface LED {
  position: number;
  red: number;
  green: number;
  blue: number;
  white: number;
}

/*
// DMXDeviceType is the type of a DMXDevice
type DMXDeviceType struct {
	ID             string     `json:"id" yaml:"id"`
	Name           string     `json:"name" yaml:"name"`
	ChannelCount   uint16     `json:"addressCount" yaml:"addressCount"`
	ChannelsPerLED uint16     `json:"channelsPerLED" yaml:"channelsPerLED"`
	StrobeEnabled  bool       `json:"strobeEnabled" yaml:"strobeEnabled"`
	StrobeChannel  DMXChannel `json:"strobeChannel" yaml:"strobeChannel"`
	DimmerEnabled  bool       `json:"dimmerEnabled" yaml:"dimmerEnabled"`
	DimmerChannel  DMXChannel `json:"dimmerChannel" yaml:"dimmerChannel"`
	ModeEnabled    bool       `json:"modeEnabled" yaml:"modeEnabled"`
	ModeChannel    DMXChannel `json:"modeChannel" yaml:"modeChannel"`
	Moving         bool       `json:"moving" yaml:"moving"`
	TiltChannel    DMXChannel `json:"tiltChannel" yaml:"tiltChannel"`
	PanChannel     DMXChannel `json:"panChannel" yaml:"panChannel"`
	LEDs           []LED      `json:"leds"`
}

// LED maps a single LEDs DMX channels
type LED struct {
	Position uint16     `json:"position" yaml:"position"`
	Red      DMXChannel `json:"red" yaml:"red"`
	Green    DMXChannel `json:"green" yaml:"green"`
	Blue     DMXChannel `json:"blue" yaml:"blue"`
	White    DMXChannel `json:"white" yaml:"white"`
}
 */
