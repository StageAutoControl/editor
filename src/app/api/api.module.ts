import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "./api.service";
import {HttpClientModule} from "@angular/common/http";
import {DataStoreService} from "./data-store.service";
import {MatSnackBarModule} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
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
