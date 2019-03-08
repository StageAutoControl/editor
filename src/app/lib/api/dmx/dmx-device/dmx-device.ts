export interface DmxDevice {
  id?: string;
  name: string;
  typeId: string;
  universe: number;
  startChannel: number;
  tags: string[];
}
