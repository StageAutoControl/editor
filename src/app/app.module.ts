import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatDesignModule} from "./mat-design/mat-design.module";
import {FormsModule} from "@angular/forms";
import {LayoutComponent} from './layout/layout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatDesignModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
