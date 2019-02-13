import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DmxDeviceModule } from './dmx-device/dmx-device.module';
import {EditorRoutingModule} from "./editor-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DmxDeviceModule,
    EditorRoutingModule,
  ],
  exports: []
})
export class EditorModule {
}
