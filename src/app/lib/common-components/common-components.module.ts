import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatDesignModule} from "../mat-design/mat-design.module";

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDesignModule,
  ],
  exports: [
    ConfirmationDialogComponent,
  ],
})
export class CommonComponentsModule {
}
