import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DMXColorVariableListComponent} from "./dmx-color-variable-list/dmx-color-variable-list.component";
import {DMXColorVariableDetailsComponent} from "./dmx-color-variable-details/dmx-color-variable-details.component";

const routes: Routes = [
  { path: 'dmx-color-variables',  component: DMXColorVariableListComponent },
  { path: 'dmx-color-variables/new', component: DMXColorVariableDetailsComponent },
  { path: 'dmx-color-variables/:id', component: DMXColorVariableDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXColorVariableRoutingModule { }
