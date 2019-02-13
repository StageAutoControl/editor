import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from "./api.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ApiService,
  ]
})
export class ApiModule { }
