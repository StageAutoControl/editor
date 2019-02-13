import { Injectable } from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Observable, of} from "rxjs";
import {DmxDevice} from "./dmx-device";

const devices: DmxDevice[] = [
  {id: "asdf", name: "LED Bar 64", typeID: "1234"},
  {id: "qwertz", name: "LED Bar 64", typeID: "1234"},
  {id: "1234-5678", name: "LED Bar 64", typeID: "1234"},
];

@Injectable({
  providedIn: 'root'
})
export class DmxDeviceService {

  constructor(private api: ApiService) { }

  getDevices(): Observable<DmxDevice[]> {
    return of(devices)
  }
}
