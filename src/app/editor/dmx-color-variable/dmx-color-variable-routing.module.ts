import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DmxColorVariableListComponent} from "./dmx-color-variable-list/dmx-color-variable-list.component";
import {DmxColorVariableDetailsComponent} from "./dmx-color-variable-details/dmx-color-variable-details.component";

const routes: Routes = [
  { path: 'dmx-color-variables',  component: DmxColorVariableListComponent },
  { path: 'dmx-color-variables/new', component: DmxColorVariableDetailsComponent },
  { path: 'dmx-color-variables/:id', component: DmxColorVariableDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmxColorVariableRoutingModule { }
