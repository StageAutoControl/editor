import {Injectable} from '@angular/core';
import {DMXAnimation} from "./dmx-animation";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class DMXAnimationService extends DataStoreService<DMXAnimation> {

  constructor(protected api: ApiService) {
    super("DMXAnimation", api);
  }
}
