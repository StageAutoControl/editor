import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage = localStorage;

  setBoolean(key: string, value: boolean) {
    this.setString(key, value.toString());
  }

  setString(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getString(key: string): string {
    return this.storage.getItem(key);
  }

  getBoolean(key: string): boolean {
    return this.getString(key) === 'true';
  }
}
