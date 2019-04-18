import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DMXSceneRoutingModule} from './dmx-scene-routing.module';
import {DMXSceneListComponent} from './dmx-scene-list/dmx-scene-list.component';
import {DMXSceneDetailsComponent} from './dmx-scene-details/dmx-scene-details.component';
import {ApiModule} from "../../lib/api/api.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {CoreModule} from "../../lib/core/core.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {StorageModule} from "../../lib/storage/storage-module";

@NgModule({
  declarations: [
    DMXSceneListComponent,
    DMXSceneDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    DMXSceneRoutingModule,
    DMXModule,
    StorageModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class DMXSceneModule {
}
