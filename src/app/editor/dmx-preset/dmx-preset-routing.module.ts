import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DMXPresetListComponent} from "./dmx-preset-list/dmx-preset-list.component";
import {DMXPresetDetailsComponent} from "./dmx-preset-details/dmx-preset-details.component";

const routes: Routes = [
  { path: 'dmx-presets',  component: DMXPresetListComponent },
  { path: 'dmx-presets/new', component: DMXPresetDetailsComponent },
  { path: 'dmx-presets/:id', component: DMXPresetDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXPresetRoutingModule { }
