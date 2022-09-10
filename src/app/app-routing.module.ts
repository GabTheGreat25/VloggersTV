import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'settings',
    loadChildren: () =>
      import('./components/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },
  {
    path: 'channel-page',
    loadChildren: () =>
      import('./components/channel-page/channel-page.module').then(
        (m) => m.ChannelPageModule
      ),
  },
  {
    path: 'paid-video',
    loadChildren: () =>
      import('./components/paid-video/paid-video.module').then(
        (m) => m.PaidVideoModule
      ),
  },
  {
    path: 'payment-option',
    loadChildren: () =>
      import('./components/payment-option/payment-option.module').then(
        (m) => m.PaymentOptionModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'downloads',
    loadChildren: () =>
      import('./components/downloads/downloads.module').then(
        (m) => m.DownloadsModule
      ),
  },
  {
    path: 'previous-video',
    loadChildren: () =>
      import('./components/previous-video/previous-video.module').then(
        (m) => m.PreviousVideoModule
      ),
  },
  {
    path: 'stream',
    loadChildren: () =>
      import('./components/stream/stream.module').then((m) => m.StreamModule),
  },
  {
    path: 'pay-per-view',
    loadChildren: () =>
      import('./components/pay-per-view/pay-per-view.module').then(
        (m) => m.PayPerViewModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
