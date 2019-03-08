import {Injectable} from '@angular/core';
import {DmxDeviceGroup} from "./dmx-device-group";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DmxDeviceGroupService extends DataStoreService<DmxDeviceGroup> {
  constructor(protected api: ApiService) {
    super("DMXDeviceGroup", api);
  }
}
