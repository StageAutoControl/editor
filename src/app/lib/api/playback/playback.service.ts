import {Injectable} from '@angular/core';
import {Params, PlaybackStatus} from "./playback";
import {ApiService} from "../base/api.service";
import {BehaviorSubject, Observable, Subscription, timer} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class PlaybackService {
  status$: Observable<PlaybackStatus>;

  private behavior: BehaviorSubject<PlaybackStatus>;
  private sub: Subscription;

  constructor(private api: ApiService) {
    this.behavior = <BehaviorSubject<PlaybackStatus>>new BehaviorSubject(null);
    this.status$ = this.behavior.asObservable();

    this.statusLoop();
  }

  start(params: Params) {
    this.api
      .call("Playback.Start", params)
      .subscribe(data => this.behavior.next(data))
  }

  stop() {
    this.api
      .call("Playback.Stop")
      .subscribe(data => this.behavior.next(data))
  }

  stopLoop() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  private status(): Observable<PlaybackStatus> {
    return this.api.call("Playback.Status");
  }

  private statusLoop() {
    this.sub = timer(0, 5000)
      .pipe(
        switchMap(() => this.status())
      )
      .subscribe(data => this.behavior.next(data));
  }
}
