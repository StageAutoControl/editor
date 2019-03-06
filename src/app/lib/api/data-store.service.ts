import {ApiService} from "./api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/internal/operators";

interface Identifiable {
  id?: string;
}

export class DataStoreService<T extends Identifiable> {
  public entities$: Observable<T[]>;

  private _entities$: BehaviorSubject<T[]>;
  private dataStore: {
    entities: T[],
  };

  constructor(
    private entityName: string,
    protected api: ApiService,
  ) {
    this.dataStore = {entities: []};
    this._entities$ = <BehaviorSubject<T[]>>new BehaviorSubject([]);
    this.entities$ = this._entities$.asObservable();
  }

  getAll() {
    this.api
      .call(`${this.entityName}.GetAll`, null)
      .subscribe((data: T[]) => {
        this.dataStore.entities = data;
        this._entities$.next(Object.assign({}, this.dataStore).entities);
      });
  }

  get(id: string): Observable<T> {
    return this.api
      .call(`${this.entityName}.Get`, {id})
      .pipe(map((data: T) => {
        let notFound = true;
        this.dataStore.entities.forEach((item: T, index: number) => {
          if (item.id === data.id) {
            this.dataStore.entities[index] = data;
            notFound = false;
          }
        });

        if (notFound) {
          this.dataStore.entities.push(data);
        }

        this._entities$.next(Object.assign({}, this.dataStore).entities);

        return data;
      }));
  }

  save(entity: T): Observable<T> {
    return entity.id ? this.update(entity) : this.create(entity);
  }

  create(entity: T): Observable<T> {
    return this.api
      .call(`${this.entityName}.Create`, entity)
      .pipe(map((data: T) => {
        this.dataStore.entities.push(data);
        this._entities$.next(Object.assign({}, this.dataStore).entities);

        return data;
      }));
  }

  update(entity: T): Observable<T> {
    return this.api
      .call(`${this.entityName}.Update`, entity)
      .pipe(map((data: T) => {
        this.dataStore.entities.forEach((t, i) => {
          if (t.id === data.id) {
            this.dataStore.entities[i] = data;
          }
        });

        this._entities$.next(Object.assign({}, this.dataStore).entities);

        return entity;
      }));
  }

  remove(id: string): Observable<void> {
    return this.api
      .call(`${this.entityName}.Delete`, {id})
      .pipe(map(_ => {
        this.dataStore.entities.forEach((t: T, i: number) => {
          if (t.id === id) {
            this.dataStore.entities.splice(i, 1);
          }
        });

        this._entities$.next(Object.assign({}, this.dataStore).entities);
      }));
  }
}
