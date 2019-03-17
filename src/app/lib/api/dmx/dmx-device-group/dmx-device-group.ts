export interface DMXDeviceGroup {
  id?: string;
  name: string;
  devices: DMXDeviceSelector[];
}

export interface DMXDeviceSelector {
  id?: string;
  tags?: string[];
}
