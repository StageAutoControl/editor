import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DMXSceneListComponent} from "./dmx-scene-list/dmx-scene-list.component";
import {DMXSceneDetailsComponent} from "./dmx-scene-details/dmx-scene-details.component";

const routes: Routes = [
  {path: 'dmx-scenes', component: DMXSceneListComponent},
  {path: 'dmx-scenes/new', component: DMXSceneDetailsComponent},
  {path: 'dmx-scenes/:id', component: DMXSceneDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DMXSceneRoutingModule {
}
