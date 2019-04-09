import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LiveComponent} from "./live.component";

const routes: Routes = [
  {path: 'live', component: LiveComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule {
}
