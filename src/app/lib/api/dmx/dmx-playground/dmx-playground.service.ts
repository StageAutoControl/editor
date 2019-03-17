import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../base/api.service";
import {DMXChannelValue} from "./dmx-channel-value";

@Injectable({
  providedIn: 'root'
})
export class DMXPlaygroundService {

  constructor(private api: ApiService) {
  }

  setDMXChannelValue(value: DMXChannelValue): Observable<null> {
    return this.api.call("DMXPlayground.SetChannelValue", value);
  }
}
