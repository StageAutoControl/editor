import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DmxDeviceRoutingModule } from './dmx-device-routing.module';
import { DmxDeviceListComponent } from './dmx-device-list/dmx-device-list.component';
import { DmxDeviceDetailComponent } from './dmx-device-detail/dmx-device-detail.component';
import {ApiModule} from "../../api/api.module";
import {MatDesignModule} from "../../core/mat-design/mat-design.module";

@NgModule({
  declarations: [
    DmxDeviceListComponent,
    DmxDeviceDetailComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    MatDesignModule,
    DmxDeviceRoutingModule,
  ]
})
export class DmxDeviceModule { }
