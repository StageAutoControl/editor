import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DMXDeviceTypeListComponent} from './dmx-device-type-list/dmx-device-type-list.component';
import {DMXDeviceTypeDetailsComponent} from "./dmx-device-type-details/dmx-device-type-details.component";
import {DMXDeviceTypeRoutingModule} from "./dmx-device-type-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {StorageModule} from "../../lib/storage/storage-module";

@NgModule({
  declarations: [
    DMXDeviceTypeListComponent,
    DMXDeviceTypeDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXDeviceTypeRoutingModule,
    DMXModule,
    StorageModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXDeviceTypeModule {
}
