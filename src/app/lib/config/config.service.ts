import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  getApiEndpoint(): string {
    return 'http://localhost:8080/rpc';
  }
}
