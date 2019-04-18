import {ModuleWithProviders, NgModule} from '@angular/core';
import {StorageService} from "./storage.service";

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class StorageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StorageModule,
      providers: [
        StorageService,
      ],
    };
  }
}
