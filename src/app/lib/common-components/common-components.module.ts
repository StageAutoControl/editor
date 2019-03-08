import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatDesignModule} from "../mat-design/mat-design.module";
import { TagListInputComponent } from './tag-list-input/tag-list-input.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    TagListInputComponent,
  ],
  imports: [
    CommonModule,
    MatDesignModule,
    CoreModule,
  ],
  exports: [
    ConfirmationDialogComponent,
    TagListInputComponent,
  ],
})
export class CommonComponentsModule {
}
