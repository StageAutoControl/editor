import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SetListRoutingModule} from './set-list-routing.module';
import {SetListListComponent} from './set-list-list/set-list-list.component';
import {SetListDetailsComponent} from './set-list-details/set-list-details.component';
import {ApiModule} from "../../lib/api/api.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {CoreModule} from "../../lib/core/core.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {MidiModule} from "../../lib/midi/midi.module";

@NgModule({
  declarations: [
    SetListListComponent,
    SetListDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    SetListRoutingModule,
    DMXModule,
    MidiModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class SetListModule {
}
