export interface DmxDeviceGroup {
  id?: string;
  name: string;
  devices: DmxDeviceSelector[];
}

export interface DmxDeviceSelector {
  id?: string;
  tags?: string[];
}
