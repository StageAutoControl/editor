import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DmxDeviceGroupListComponent} from "./dmx-device-group-list/dmx-device-group-list.component";
import {DmxDeviceGroupDetailsComponent} from "./dmx-device-group-details/dmx-device-group-details.component";

const routes: Routes = [
  { path: 'dmx-device-groups',  component: DmxDeviceGroupListComponent },
  { path: 'dmx-device-groups/new', component: DmxDeviceGroupDetailsComponent },
  { path: 'dmx-device-groups/:id', component: DmxDeviceGroupDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmxDeviceGroupRoutingModule { }
