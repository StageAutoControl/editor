import {Injectable} from '@angular/core';
import {SetList} from "./set-list";
import {DataStoreService} from "../base/data-store.service";
import {ApiService} from "../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class SetListService extends DataStoreService<SetList> {
  constructor(protected api: ApiService) {
    super("SetList", api);
  }
}
