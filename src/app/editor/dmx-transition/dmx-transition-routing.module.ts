import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DMXTransitionListComponent} from "./dmx-transition-list/dmx-transition-list.component";
import {DMXTransitionDetailsComponent} from "./dmx-transition-details/dmx-transition-details.component";

const routes: Routes = [
  { path: 'dmx-transitions',  component: DMXTransitionListComponent },
  { path: 'dmx-transitions/new', component: DMXTransitionDetailsComponent },
  { path: 'dmx-transitions/:id', component: DMXTransitionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXTransitionRoutingModule { }
