import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'influencer',
        loadChildren: () =>
          import('./influencer/influencer.module').then(
            (m) => m.InfluencerModule
          ),
      },
      {
        path: 'channel',
        loadChildren: () =>
          import('./channel/channel.module').then((m) => m.ChannelModule),
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
  ],
})
export class DashboardModule {}
