import {Injectable} from '@angular/core';
import {DMXScene} from "./dmx-scene";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DMXSceneService extends DataStoreService<DMXScene> {
  constructor(protected api: ApiService) {
    super("DMXScene", api);
  }
}
