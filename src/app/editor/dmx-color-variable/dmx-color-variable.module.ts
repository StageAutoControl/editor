import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DMXColorVariableListComponent} from './dmx-color-variable-list/dmx-color-variable-list.component';
import {DMXColorVariableDetailsComponent} from "./dmx-color-variable-details/dmx-color-variable-details.component";
import {DMXColorVariableRoutingModule} from "./dmx-color-variable-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DMXColorVariableListComponent,
    DMXColorVariableDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXColorVariableRoutingModule,
    DMXModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXColorVariableModule {
}
