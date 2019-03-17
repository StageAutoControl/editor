import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DMXDeviceListComponent} from "./dmx-device-list/dmx-device-list.component";
import {DMXDeviceDetailsComponent} from "./dmx-device-details/dmx-device-details.component";

const routes: Routes = [
  { path: 'dmx-devices',  component: DMXDeviceListComponent },
  { path: 'dmx-devices/new', component: DMXDeviceDetailsComponent },
  { path: 'dmx-devices/:id', component: DMXDeviceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXDeviceRoutingModule { }
