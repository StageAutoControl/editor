import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DMXDeviceTypeListComponent} from "./dmx-device-type-list/dmx-device-type-list.component";
import {DMXDeviceTypeDetailsComponent} from "./dmx-device-type-details/dmx-device-type-details.component";

const routes: Routes = [
  {path: 'dmx-device-types', component: DMXDeviceTypeListComponent},
  {path: 'dmx-device-types/new', component: DMXDeviceTypeDetailsComponent},
  {path: 'dmx-device-types/:id', component: DMXDeviceTypeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXDeviceTypeRoutingModule {
}
