import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';
import { ChannelPageComponent } from './channel-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChannelPageComponent,
    children: [
      {
        path: 'playlist',
        loadChildren: () =>
          import('./playlist/playlist.module').then((m) => m.PlaylistModule),
      },
      {
        path: 'video',
        loadChildren: () =>
          import('./video/video.module').then((m) => m.VideoModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [ChannelPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
  ],
})
export class ChannelPageModule {}
