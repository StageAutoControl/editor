import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SongRoutingModule} from './song-routing.module';
import {SongListComponent} from './song-list/song-list.component';
import {SongDetailsComponent} from './song-details/song-details.component';
import {ApiModule} from "../../lib/api/api.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {CoreModule} from "../../lib/core/core.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {ConfirmationDialogComponent} from "../../lib/common-components/confirmation-dialog/confirmation-dialog.component";
import {MidiModule} from "../../lib/midi/midi.module";
import {SongModule as SongComponentsModule} from "../../lib/song/song.module";

@NgModule({
  declarations: [
    SongListComponent,
    SongDetailsComponent,
  ],
  imports: [
    CommonModule,
    ApiModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
    SongRoutingModule,
    DMXModule,
    MidiModule,
    SongComponentsModule,
  ],
  entryComponents: [
    ConfirmationDialogComponent,
  ]
})
export class SongModule {
}
