import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LedFormComponent} from './led-form/led-form.component';
import {LedListFormComponent} from './led-list-form/led-list-form.component';
import {CoreModule} from "../core/core.module";
import {MatDesignModule} from "../mat-design/mat-design.module";
import {DeviceSelectorFormComponent} from "./device-selector-form/device-selector-form.component";
import {DeviceSelectorsFormComponent} from "./device-selectors-form/device-selectors-form.component";
import {CommonComponentsModule} from "../common-components/common-components.module";
import {DeviceSelectorListComponent} from "./device-selector-list/device-selector-list.component";
import {DeviceChannelInputsComponent} from './device-channel-inputs/device-channel-inputs.component';
import {ParamsFormComponent} from "./params-form/params-form.component";
import {AnimationFramesFormComponent} from "./animation-frames-form/animation-frames-form.component";
import {TransitionParamsFormComponent} from "./transition-params-form/transition-params-form.component";
import {DeviceParamsListComponent} from './device-params-list/device-params-list.component';
import {DeviceParamsListFormComponent} from "./device-params-list-form/device-params-list-form.component";
import {ParamsListFormComponent} from "./params-list-form/params-list-form.component";
import {AnimationSelectComponent} from './animation-select/animation-select.component';
import {TransitionSelectComponent} from "./transition-select/transition-select.component";
import {DeviceSelectComponent} from "./device-select/device-select.component";
import {DeviceGroupSelectComponent} from "./device-group-select/device-group-select.component";
import { DeviceParamsFormComponent } from './device-params-form/device-params-form.component';

@NgModule({
  declarations: [
    LedFormComponent,
    LedListFormComponent,
    DeviceSelectorFormComponent,
    DeviceSelectorsFormComponent,
    DeviceSelectorListComponent,
    DeviceChannelInputsComponent,
    ParamsFormComponent,
    AnimationFramesFormComponent,
    TransitionParamsFormComponent,
    DeviceParamsListComponent,
    DeviceParamsListFormComponent,
    ParamsListFormComponent,
    AnimationSelectComponent,
    TransitionSelectComponent,
    DeviceSelectComponent,
    DeviceGroupSelectComponent,
    DeviceParamsFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
  ],
  exports: [
    LedFormComponent,
    LedListFormComponent,
    DeviceSelectorFormComponent,
    DeviceSelectorsFormComponent,
    DeviceSelectorListComponent,
    DeviceChannelInputsComponent,
    ParamsFormComponent,
    AnimationFramesFormComponent,
    TransitionParamsFormComponent,
    DeviceParamsListComponent,
    DeviceParamsListFormComponent,
    ParamsListFormComponent,
    AnimationSelectComponent,
    TransitionSelectComponent,
    DeviceSelectComponent,
    DeviceGroupSelectComponent,
  ],
})
export class DMXModule {
}
