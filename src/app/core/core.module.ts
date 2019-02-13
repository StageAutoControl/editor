import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatDesignModule} from "./mat-design/mat-design.module";
import {LayoutComponent} from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MatDesignModule,
  ],
  exports: [
    MatDesignModule,
    LayoutComponent,
  ],
})
export class CoreModule { }
