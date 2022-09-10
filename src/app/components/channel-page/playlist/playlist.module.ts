import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { PlaylistComponent } from './playlist.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistComponent,
  },
];

@NgModule({
  declarations: [PlaylistComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class PlaylistModule {}
