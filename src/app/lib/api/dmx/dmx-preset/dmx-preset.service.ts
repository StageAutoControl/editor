import {Injectable} from '@angular/core';
import {DMXPreset} from "./dmx-preset";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DMXPresetService extends DataStoreService<DMXPreset> {
  constructor(protected api: ApiService) {
    super("DMXPreset", api);
  }
}
