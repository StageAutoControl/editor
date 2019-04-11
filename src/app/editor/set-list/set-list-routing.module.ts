import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetListListComponent} from "./set-list-list/set-list-list.component";
import {SetListDetailsComponent} from "./set-list-details/set-list-details.component";

const routes: Routes = [
  {path: 'set-lists', component: SetListListComponent},
  {path: 'set-lists/new', component: SetListDetailsComponent},
  {path: 'set-lists/:id', component: SetListDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetListRoutingModule {
}
