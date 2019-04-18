import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DMXDeviceRoutingModule} from './dmx-device-routing.module';
import {DMXDeviceListComponent} from './dmx-device-list/dmx-device-list.component';
import {DMXDeviceDetailsComponent} from './dmx-device-details/dmx-device-details.component';
import {ApiModule} from "../../lib/api/api.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {CoreModule} from "../../lib/core/core.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {StorageModule} from "../../lib/storage/storage-module";

@NgModule({
  declarations: [
    DMXDeviceListComponent,
    DMXDeviceDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXDeviceRoutingModule,
    DMXModule,
    StorageModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXDeviceModule {
}
