import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DMXDeviceModule} from './dmx-device/dmx-device.module';
import {EditorRoutingModule} from "./editor-routing.module";
import {DMXDeviceTypeModule} from "./dmx-device-type/dmx-device-type.module";
import {DMXDeviceGroupModule} from "./dmx-device-group/dmx-device-group.module";
import {PlaygroundModule} from "./playground/playground.module";
import {DMXColorVariableModule} from "./dmx-color-variable/dmx-color-variable.module";
import {DMXAnimationModule} from "./dmx-animation/dmx-animation.module";
import {DMXTransitionModule} from "./dmx-transition/dmx-transition.module";
import {DMXPresetModule} from "./dmx-preset/dmx-preset.module";
import {DMXSceneModule} from "./dmx-scene/dmx-scene.module";
import {SongModule} from "./song/song.module";
import {LiveModule} from "./live/live.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DMXDeviceModule,
    DMXDeviceTypeModule,
    DMXDeviceGroupModule,
    EditorRoutingModule,
    DMXColorVariableModule,
    DMXAnimationModule,
    DMXTransitionModule,
    DMXPresetModule,
    DMXSceneModule,
    SongModule,
    PlaygroundModule,
    LiveModule,
  ],
  exports: []
})
export class EditorModule {
}
