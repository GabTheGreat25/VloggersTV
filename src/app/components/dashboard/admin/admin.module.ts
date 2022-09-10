import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from '../../utilities/navbar/navbar.module';
import { SidenavModule } from '../../utilities/sidenav/sidenav.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'create',
        loadChildren: () =>
          import('././create/create.module').then((m) => m.CreateModule),
      },
      {
        path: 'analytics',
        loadChildren: () =>
          import('././analytics/analytics.module').then(
            (m) => m.AnalyticsModule
          ),
      },
      {
        path: 'content',
        loadChildren: () =>
          import('././content/content.module').then((m) => m.ContentModule),
      },
      {
        path: 'viewers',
        loadChildren: () =>
          import('././viewers/viewers.module').then((m) => m.ViewersModule),
      },
      {
        path: 'influencer',
        loadChildren: () =>
          import('././influencer/influencer.module').then(
            (m) => m.InfluencerModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('././user/user.module').then((m) => m.UserModule),
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
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
    SidenavModule,
  ],
})
export class AdminModule {}
