import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LedFormComponent} from './led-form/led-form.component';
import {LedListFormComponent} from './led-list-form/led-list-form.component';
import {CoreModule} from "../core/core.module";
import {MatDesignModule} from "../mat-design/mat-design.module";

@NgModule({
  declarations: [
    LedFormComponent,
    LedListFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatDesignModule,
  ],
  exports: [
    LedFormComponent,
    LedListFormComponent,
  ],
})
export class DmxModule {
}
