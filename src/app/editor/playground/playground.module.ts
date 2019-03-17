import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaygroundRoutingModule} from "./playground-routing.module";
import {PlaygroundComponent} from './playground.component';
import {CoreModule} from "../../lib/core/core.module";
import {MatDesignModule} from "../../lib/mat-design/mat-design.module";
import {DMXModule} from "../../lib/dmx/dmx.module";
import {CommonComponentsModule} from "../../lib/common-components/common-components.module";

@NgModule({
  declarations: [
    PlaygroundComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatDesignModule,
    DMXModule,
    CommonComponentsModule,
    PlaygroundRoutingModule,
  ]
})
export class PlaygroundModule {
}
