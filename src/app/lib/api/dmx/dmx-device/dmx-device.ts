export interface DMXDevice {
  id?: string;
  name: string;
  typeId: string;
  universe: number;
  startChannel: number;
  tags: string[];
}
