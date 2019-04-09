import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LiveRoutingModule} from "./live-routing.module";
import {LiveComponent} from './live.component';
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";

@NgModule({
  declarations: [
    LiveComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatDesignModule,
    DMXModule,
    CommonComponentsModule,
    LiveRoutingModule,
  ]
})
export class LiveModule {
}
