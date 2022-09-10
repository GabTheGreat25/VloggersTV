import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfluencerComponent } from './influencer.component';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../../utilities/navbar/navbar.module';
import { SidenavModule } from '../../utilities/sidenav/sidenav.module';

const routes: Routes = [
  {
    path: '',
    component: InfluencerComponent,
    children: [
      {
        path: 'channel',
        loadChildren: () =>
          import('./channel/channel.module').then((m) => m.ChannelModule),
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
  declarations: [InfluencerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
    SidenavModule,
  ],
})
export class InfluencerModule {}
