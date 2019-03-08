import {Injectable} from '@angular/core';
import {DmxDevice} from "./dmx-device";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DmxDeviceService extends DataStoreService<DmxDevice> {
  constructor(protected api: ApiService) {
    super("DMXDevice", api);
  }
}
