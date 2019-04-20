import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {
  }

  getApiEndpoint(): string {
    return environment.apiEndpoint;
  }
}
