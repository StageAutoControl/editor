import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DMXDeviceGroupListComponent} from "./dmx-device-group-list/dmx-device-group-list.component";
import {DMXDeviceGroupDetailsComponent} from "./dmx-device-group-details/dmx-device-group-details.component";

const routes: Routes = [
  { path: 'dmx-device-groups',  component: DMXDeviceGroupListComponent },
  { path: 'dmx-device-groups/new', component: DMXDeviceGroupDetailsComponent },
  { path: 'dmx-device-groups/:id', component: DMXDeviceGroupDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXDeviceGroupRoutingModule { }
