import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DmxDeviceTypeListComponent} from './dmx-device-type-list/dmx-device-type-list.component';
import {DmxDeviceTypeDetailsComponent} from "./dmx-device-type-details/dmx-device-type-details.component";
import {DmxDeviceTypeRoutingModule} from "./dmx-device-type-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DmxModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DmxDeviceTypeListComponent,
    DmxDeviceTypeDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DmxDeviceTypeRoutingModule,
    DmxModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DmxDeviceTypeModule {
}
