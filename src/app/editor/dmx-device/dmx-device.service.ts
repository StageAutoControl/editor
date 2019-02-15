import {Injectable} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {DmxDevice} from "./dmx-device";
import {DataStoreService} from "../../api/data-store.service";

const devices: DmxDevice[] = [
  {id: "asdf", name: "LED Bar 64", typeID: "1234"},
  {id: "qwertz", name: "LED Bar 64", typeID: "1234"},
  {id: "1234-5678", name: "LED Bar 64", typeID: "1234"},
];

@Injectable({
  providedIn: 'root',
})
export class DmxDeviceService extends DataStoreService<DmxDevice> {
  constructor(protected api: ApiService) {
    super("DMXDevice", api);
  }
}
