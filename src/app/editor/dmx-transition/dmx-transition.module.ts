import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DMXTransitionListComponent} from './dmx-transition-list/dmx-transition-list.component';
import {DMXTransitionDetailsComponent} from "./dmx-transition-details/dmx-transition-details.component";
import {DMXTransitionRoutingModule} from "./dmx-transition-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DMXTransitionListComponent,
    DMXTransitionDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXTransitionRoutingModule,
    DMXModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXTransitionModule {
}
