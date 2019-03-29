import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Request, Response} from "./rpc";
import {map, tap} from "rxjs/internal/operators";
import {MatSnackBar} from "@angular/material";
import {ConfigService} from "../../config/config.service";

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
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
  ) {
    this.endpoint = config.getApiEndpoint();
  }

  call(method: string, param?: any): Observable<any> {
    let req = this.toRequest(method, param);

    return this.httpClient
      .post(this.endpoint, req, {
        headers: this.headers,
      })
      .pipe(map((res: Response) => this.fromResponse(res)))
      .pipe(tap(null, err => this.logError(req, err)))
      .pipe(tap(null, err => this.alert(err)));
  }

  private toRequest(method: string, param?: any): Request {
    return {
      id: this.getRequestID(),
      method,
      params: [
        param || null,
      ]
    }
  }

  private getRequestID(): number {
    return ++this.requestID;
  }

  private fromResponse(res: Response): any {
    if (res.error != null && res.error != "") {
      throw new Error(res.error);
    }

    return res.result;
  }

  private logError(req: Request, err: HttpErrorResponse) {
    console.error(`Error calling method ${req.method}: ${err}`);
  }

  private alert(err: HttpErrorResponse) {
    if (err.status === 0) {
      this.snackBar
        .open('Connection to controller lost. Please reload the page!', 'reload', {})
        .onAction()
        .subscribe(() => location.reload());

      return;
    }

    this.snackBar.open(err.message, 'close', {
      duration: 5000,
    })
  }
}
