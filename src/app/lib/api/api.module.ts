import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from "./base/api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material";
import {DmxDeviceTypeService} from "./dmx/dmx-device-type/dmx-device-type.service";
import {DmxDeviceService} from "./dmx/dmx-device/dmx-device.service";
import {DmxDeviceGroupService} from "./dmx/dmx-device-group/dmx-device-group.service";
import {DmxPlaygroundService} from "./dmx/dmx-playground.service";

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
        DmxDeviceService,
        DmxDeviceTypeService,
        DmxDeviceGroupService,
        DmxPlaygroundService,
      ],
    };
  }
}
