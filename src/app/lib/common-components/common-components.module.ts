import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatDesignModule} from "../mat-design/mat-design.module";
import {TagListInputComponent} from './tag-list-input/tag-list-input.component';
import {CoreModule} from "../core/core.module";
import {DisableControlDirective} from "./disable-control.directive";
import {ReactiveDmxInputComponent} from './reactive-dmx-input/reactive-dmx-input.component';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    TagListInputComponent,
    DisableControlDirective,
    ReactiveDmxInputComponent,
  ],
  imports: [
    CommonModule,
    MatDesignModule,
    CoreModule,
  ],
  exports: [
    ConfirmationDialogComponent,
    TagListInputComponent,
    DisableControlDirective,
    ReactiveDmxInputComponent,
  ],
})
export class CommonComponentsModule {
}
