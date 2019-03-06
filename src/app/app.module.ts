import {NgModule} from '@angular/core';
import {Router} from "@angular/router";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./lib/core/core.module";
import {ApiModule} from "./lib/api/api.module";
import {LayoutModule} from "./lib/layout/layout.module";
import {EditorModule} from "./editor/editor.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    ApiModule.forRoot(),
    LayoutModule,
    EditorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
