import {Injectable} from '@angular/core';
import {DMXTransition} from "./dmx-transition";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DMXTransitionService extends DataStoreService<DMXTransition> {
  constructor(protected api: ApiService) {
    super("DMXTransition", api);
  }
}
