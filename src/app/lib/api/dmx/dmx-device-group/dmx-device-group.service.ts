import {Injectable} from '@angular/core';
import {DMXDeviceGroup} from "./dmx-device-group";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DMXDeviceGroupService extends DataStoreService<DMXDeviceGroup> {
  constructor(protected api: ApiService) {
    super("DMXDeviceGroup", api);
  }
}
