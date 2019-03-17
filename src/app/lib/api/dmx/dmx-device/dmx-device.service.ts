import {Injectable} from '@angular/core';
import {DMXDevice} from "./dmx-device";
import {DataStoreService} from "../../base/data-store.service";
import {ApiService} from "../../base/api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DMXDeviceService extends DataStoreService<DMXDevice> {
  tags$: Observable<string[]>;

  constructor(protected api: ApiService) {
    super("DMXDevice", api);

    this.tags$ = this.entities$
      .pipe(map((entities: DMXDevice[]) => entities.reduce((prev: string[], entity: DMXDevice) => entity.tags.concat(prev), [])))
      .pipe(map((tags: string[]) => tags.filter((v, i, a) => a.indexOf(v) === i)));

  }
}
