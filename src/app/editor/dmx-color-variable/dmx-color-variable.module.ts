import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DmxColorVariableListComponent} from './dmx-color-variable-list/dmx-color-variable-list.component';
import {DmxColorVariableDetailsComponent} from "./dmx-color-variable-details/dmx-color-variable-details.component";
import {DmxColorVariableRoutingModule} from "./dmx-color-variable-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DmxModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DmxColorVariableListComponent,
    DmxColorVariableDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DmxColorVariableRoutingModule,
    DmxModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DmxColorVariableModule {
}
