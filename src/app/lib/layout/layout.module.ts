import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {CoreModule} from "../core/core.module";
import {MatDesignModule} from "../mat-design/mat-design.module";
import {CommonComponentsModule} from "../common-components/common-components.module";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatDesignModule,
    CommonComponentsModule,
  ],
  exports: [
    LayoutComponent,
  ],
})
export class LayoutModule {
}
