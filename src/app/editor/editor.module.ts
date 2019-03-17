import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DMXDeviceModule} from './dmx-device/dmx-device.module';
import {EditorRoutingModule} from "./editor-routing.module";
import {DMXDeviceTypeModule} from "./dmx-device-type/dmx-device-type.module";
import {DMXDeviceGroupModule} from "./dmx-device-group/dmx-device-group.module";
import {PlaygroundModule} from "./playground/playground.module";
import {DMXColorVariableModule} from "./dmx-color-variable/dmx-color-variable.module";
import {DMXAnimationModule} from "./dmx-animation/dmx-animation.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DMXDeviceModule,
    DMXDeviceTypeModule,
    DMXDeviceGroupModule,
    EditorRoutingModule,
    PlaygroundModule,
    DMXColorVariableModule,
    DMXAnimationModule,
  ],
  exports: []
})
export class EditorModule {
}
