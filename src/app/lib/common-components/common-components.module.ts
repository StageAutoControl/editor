import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatDesignModule} from "../mat-design/mat-design.module";
import {TagListInputComponent} from './tag-list-input/tag-list-input.component';
import {CoreModule} from "../core/core.module";
import {DisableControlDirective} from "./disable-control.directive";
import {ReactiveDMXInputComponent} from './reactive-dmx-input/reactive-dmx-input.component';
import {ColorComponent} from './color/color.component';
import {HiddenDirective} from "./hidden.directive";

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    TagListInputComponent,
    DisableControlDirective,
    ReactiveDMXInputComponent,
    ColorComponent,
    HiddenDirective,
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
    ReactiveDMXInputComponent,
    ColorComponent,
    HiddenDirective,
  ],
})
export class CommonComponentsModule {
}
