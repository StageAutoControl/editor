import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DMXAnimationListComponent} from "./dmx-animation-list/dmx-animation-list.component";
import {DMXAnimationDetailsComponent} from "./dmx-animation-details/dmx-animation-details.component";

const routes: Routes = [
  { path: 'dmx-animations',  component: DMXAnimationListComponent },
  { path: 'dmx-animations/new', component: DMXAnimationDetailsComponent },
  { path: 'dmx-animations/:id', component: DMXAnimationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXAnimationRoutingModule { }
