import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {Request, Response} from "./rpc";
import {catchError, map} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly endpoint: string;
  private requestID = 0;

  private readonly headers: { [param: string]: string } = {
    'content-type': 'application/json',
  };

  constructor(
    private config: ConfigService,
    private httpClient: HttpClient
  ) {
    this.endpoint = config.getApiEndpoint();
  }

  call(method: string, param: any): Observable<any> {
    let req = this.toRequest(method, param);

    return this.httpClient
      .post(this.endpoint, req, {
        headers: this.headers,
      })
      .pipe(map((res: Response) => {
        return this.fromResponse(req, res);
      }))
      .pipe(catchError(            err => {
        console.error(err);
        return err;
      }));
  }

  private toRequest(method: string, param: any): Request {
    return {
      id: this.getRequestID(),
      method,
      params: [
        param,
      ]
    }
  }

  private getRequestID(): number {
    return ++this.requestID;
  }

  private fromResponse(req: Request, res: Response): any {
    if (res.error != null && res.error != "") {
      throw new Error(`Error calling method ${req.method} at request id ${res.id}: ${res.error}`);
    }

    return res.result;
  }
}
