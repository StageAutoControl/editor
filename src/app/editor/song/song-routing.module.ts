import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SongListComponent} from "./song-list/song-list.component";
import {SongDetailsComponent} from "./song-details/song-details.component";

const routes: Routes = [
  {path: 'songs', component: SongListComponent},
  {path: 'songs/new', component: SongDetailsComponent},
  {path: 'songs/:id', component: SongDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule {
}
