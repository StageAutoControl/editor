import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DMXAnimationListComponent} from './dmx-animation-list/dmx-animation-list.component';
import {DMXAnimationDetailsComponent} from "./dmx-animation-details/dmx-animation-details.component";
import {DMXAnimationRoutingModule} from "./dmx-animation-routing.module";
import {ApiModule} from "../../lib/api/api.module";
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";

@NgModule({
  declarations: [
    DMXAnimationListComponent,
    DMXAnimationDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXAnimationRoutingModule,
    DMXModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXAnimationModule {
}
