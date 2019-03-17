import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DMXPresetRoutingModule} from './dmx-preset-routing.module';
import {DMXPresetListComponent} from './dmx-preset-list/dmx-preset-list.component';
import {DMXPresetDetailsComponent} from './dmx-preset-details/dmx-preset-details.component';
import {ApiModule} from "../../lib/api/api.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {CoreModule} from "../../lib/core/core.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DMXPresetListComponent,
    DMXPresetDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXPresetRoutingModule,
    DMXModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXPresetModule {
}
