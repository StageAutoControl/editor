import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DmxDeviceTypeListComponent} from "./dmx-device-type-list/dmx-device-type-list.component";
import {DmxDeviceTypeDetailsComponent} from "./dmx-device-type-details/dmx-device-type-details.component";

const routes: Routes = [
  { path: 'dmx-device-types',  component: DmxDeviceTypeListComponent },
  { path: 'dmx-device-types/new', component: DmxDeviceTypeDetailsComponent },
  { path: 'dmx-device-types/:id', component: DmxDeviceTypeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DmxDeviceTypeRoutingModule { }
