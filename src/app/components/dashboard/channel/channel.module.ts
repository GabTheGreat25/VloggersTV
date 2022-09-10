import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelComponent } from './channel.component';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../../utilities/navbar/navbar.module';
import { SidenavModule } from '../../utilities/sidenav/sidenav.module';
import { VideoModule } from './contents/video/video.module';

const routes: Routes = [
  {
    path: '',
    component: ChannelComponent,
    children: [
      {
        path: 'analytics',
        loadChildren: () =>
          import('././analytics/analytics.module').then(
            (m) => m.AnalyticsModule
          ),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('././comments/comments.module').then((m) => m.CommentsModule),
      },
      {
        path: 'contents',
        loadChildren: () =>
          import('././contents/contents.module').then((m) => m.ContentsModule),
      },
      {
        path: 'playlist',
        loadChildren: () =>
          import('././playlist/playlist.module').then((m) => m.PlaylistModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('././home/home.module').then((m) => m.HomeModule),
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
  declarations: [ChannelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
    SidenavModule,
    VideoModule,
  ],
})
export class ChannelModule {}
