import {Injectable} from '@angular/core';
import {ApiService} from "../base/api.service";
import {DmxChannelValue} from "./dmx-channel-value";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DmxPlaygroundService {

  constructor(private api: ApiService) {
  }

  setDmxChannelValue(value: DmxChannelValue): Observable<null> {
    return this.api.call("DMXPlayground.SetChannelValue", value);
  }
}
