import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DmxDeviceListComponent} from "./dmx-device-list/dmx-device-list.component";
import {DmxDeviceDetailComponent} from "./dmx-device-detail/dmx-device-detail.component";

const routes: Routes = [
  { path: 'dmx-devices',  component: DmxDeviceListComponent },
  { path: 'dmx-devices/:id', component: DmxDeviceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmxDeviceRoutingModule { }
