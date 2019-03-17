import {Injectable} from '@angular/core';
import {DmxColorVariable} from "./dmx-color-variable";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DmxColorVariableService extends DataStoreService<DmxColorVariable> {
  constructor(protected api: ApiService) {
    super("DMXColorVariable", api);
  }
}
