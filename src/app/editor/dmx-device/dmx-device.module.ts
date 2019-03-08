import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DmxDeviceRoutingModule} from './dmx-device-routing.module';
import {DmxDeviceListComponent} from './dmx-device-list/dmx-device-list.component';
import {DmxDeviceDetailsComponent} from './dmx-device-details/dmx-device-details.component';
import {ApiModule} from "../../lib/api/api.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {CoreModule} from "../../lib/core/core.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {DmxModule} from "../../lib/dmx/dmx.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DmxDeviceListComponent,
    DmxDeviceDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DmxDeviceRoutingModule,
    DmxModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DmxDeviceModule {
}
