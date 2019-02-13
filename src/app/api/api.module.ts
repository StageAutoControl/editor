import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "./api.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: []
})
export class ApiModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        ApiService,
      ],
    };
  }
}
