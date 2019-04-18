import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DMXDeviceGroupListComponent} from './dmx-device-group-list/dmx-device-group-list.component';
import {DMXDeviceGroupDetailsComponent} from "./dmx-device-group-details/dmx-device-group-details.component";
import {DMXDeviceGroupRoutingModule} from "./dmx-device-group-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {StorageModule} from "../../lib/storage/storage-module";

@NgModule({
  declarations: [
    DMXDeviceGroupListComponent,
    DMXDeviceGroupDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXDeviceGroupRoutingModule,
    DMXModule,
    StorageModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXDeviceGroupModule {
}
