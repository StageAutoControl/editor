import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from "./base/api.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material";
import {DMXDeviceTypeService} from "./dmx/dmx-device-type/dmx-device-type.service";
import {DMXDeviceService} from "./dmx/dmx-device/dmx-device.service";
import {DMXDeviceGroupService} from "./dmx/dmx-device-group/dmx-device-group.service";
import {DMXPlaygroundService} from "./dmx/dmx-playground/dmx-playground.service";
import {DMXPresetService} from "./dmx/dmx-preset/dmx-preset.service";
import {DMXAnimationService} from "./dmx/dmx-animation/dmx-animation.service";
import {DMXSceneService} from "./dmx/dmx-scene/dmx-scene.service";
import {DMXTransitionService} from "./dmx/dmx-transition/dmx-transition.service";
import {DMXColorVariableService} from "./dmx/dmx-color-variable/dmx-color-variable.service";
import {SetListService} from "./set-list/set-list.service";
import {SongService} from "./song/song.service";
import {PlaybackService} from "./playback/playback.service";

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
        DMXAnimationService,
        DMXColorVariableService,
        DMXDeviceService,
        DMXDeviceGroupService,
        DMXDeviceTypeService,
        DMXPlaygroundService,
        DMXPresetService,
        DMXSceneService,
        DMXTransitionService,
        SetListService,
        SongService,
        PlaybackService,
      ],
    };
  }
}
