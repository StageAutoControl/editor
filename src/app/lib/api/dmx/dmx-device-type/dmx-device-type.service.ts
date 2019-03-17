import {Injectable} from '@angular/core';
import {DMXDeviceType} from "./dmx-device-type";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DMXDeviceTypeService extends DataStoreService<DMXDeviceType> {
  constructor(protected api: ApiService) {
    super("DMXDeviceType", api);
  }
}
