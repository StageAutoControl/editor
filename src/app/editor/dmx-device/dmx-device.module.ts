import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DmxDeviceRoutingModule} from './dmx-device-routing.module';
import {DmxDeviceListComponent} from './dmx-device-list/dmx-device-list.component';
import {DmxDeviceDetailsComponent} from './dmx-device-details/dmx-device-details.component';
import {ApiModule} from "../../lib/api/api.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";

@NgModule({
  declarations: [
    DmxDeviceListComponent,
    DmxDeviceDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    MatDesignModule,
    DmxDeviceRoutingModule,
  ]
})
export class DmxDeviceModule {
}
