import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DmxDeviceModule } from './dmx-device/dmx-device.module';
import {EditorRoutingModule} from "./editor-routing.module";
import {DmxDeviceTypeModule} from "./dmx-device-type/dmx-device-type.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DmxDeviceModule,
    DmxDeviceTypeModule,
    EditorRoutingModule,
  ],
  exports: []
})
export class EditorModule {
}
