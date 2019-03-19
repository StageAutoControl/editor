import {Injectable} from '@angular/core';
import {Song} from "./song";
import {DataStoreService} from "../base/data-store.service";
import {ApiService} from "../base/api.service";

@Injectable({
  providedIn: 'root',
})
export class SongService extends DataStoreService<Song> {
  constructor(protected api: ApiService) {
    super("Song", api);
  }
}
