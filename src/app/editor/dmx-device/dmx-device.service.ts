import {Injectable} from '@angular/core';
import {DmxDevice} from "./dmx-device";
import {DataStoreService} from "../../lib/api/data-store.service";
import {ApiService} from "../../lib/api/api.service";

@Injectable({
  providedIn: 'root',
})
export class DmxDeviceService extends DataStoreService<DmxDevice> {
  constructor(protected api: ApiService) {
    super("DMXDevice", api);
  }
}
