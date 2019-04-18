import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandListFormComponent} from './command-list-form/command-list-form.component';
import {CommandFormComponent} from './command-form/command-form.component';
import {CoreModule} from "../core/core.module";
import {MatDesignModule} from "../mat-design/mat-design.module";

@NgModule({
  declarations: [
    CommandListFormComponent,
    CommandFormComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatDesignModule,
  ],
  exports: [
    CommandListFormComponent,
    CommandFormComponent,
  ],
})
export class MidiModule {
}
