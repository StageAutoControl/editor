import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DmxDeviceListComponent} from "./dmx-device-list/dmx-device-list.component";
import {DmxDeviceDetailsComponent} from "./dmx-device-details/dmx-device-details.component";

const routes: Routes = [
  { path: 'dmx-devices',  component: DmxDeviceListComponent },
  { path: 'dmx-devices/new', component: DmxDeviceDetailsComponent },
  { path: 'dmx-devices/:id', component: DmxDeviceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmxDeviceRoutingModule { }
