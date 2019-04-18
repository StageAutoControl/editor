import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BarChangeListFormComponent} from './bar-change-list-form/bar-change-list-form.component';
import {BarChangeFormComponent} from './bar-change-form/bar-change-form.component';
import {CoreModule} from "../core/core.module";
import {MatDesignModule} from "../mat-design/mat-design.module";
import {CommonComponentsModule} from "../common-components/common-components.module";

@NgModule({
  declarations: [
    BarChangeListFormComponent,
    BarChangeFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
  ],
  exports: [
    BarChangeListFormComponent,
    BarChangeFormComponent,
  ],
})
export class SongModule {
}
