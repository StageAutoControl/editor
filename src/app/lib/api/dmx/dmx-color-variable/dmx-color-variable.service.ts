import {Injectable} from '@angular/core';
import {DMXColorVariable} from "./dmx-color-variable";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DMXColorVariableService extends DataStoreService<DMXColorVariable> {
  constructor(protected api: ApiService) {
    super("DMXColorVariable", api);
  }
}
