import {Injectable} from '@angular/core';
import {DmxDeviceType} from "./dmx-device-type";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DmxDeviceTypeService extends DataStoreService<DmxDeviceType> {
  constructor(protected api: ApiService) {
    super("DMXDeviceType", api);
  }
}
