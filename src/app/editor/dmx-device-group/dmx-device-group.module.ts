import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DmxDeviceGroupListComponent} from './dmx-device-group-list/dmx-device-group-list.component';
import {DmxDeviceGroupDetailsComponent} from "./dmx-device-group-details/dmx-device-group-details.component";
import {DmxDeviceGroupRoutingModule} from "./dmx-device-group-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DmxModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DmxDeviceGroupListComponent,
    DmxDeviceGroupDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DmxDeviceGroupRoutingModule,
    DmxModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DmxDeviceGroupModule {
}
