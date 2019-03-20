import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigService} from "./config.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class ConfigModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConfigModule,
      providers: [
        ConfigService,
      ],
    };
  }
}
