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

@NgModule({
  declarations: [
    LedFormComponent,
    LedListFormComponent,
    DeviceSelectorFormComponent,
    DeviceSelectorsFormComponent,
    DeviceSelectorListComponent,
    DeviceChannelInputsComponent,
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
  ],
})
export class DMXModule {
}
