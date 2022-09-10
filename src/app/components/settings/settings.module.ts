import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'edit-profile',
        loadChildren: () =>
          import('./edit-profile/edit-profile.module').then(
            (m) => m.EditProfileModule
          ),
      },
      {
        path: 'password',
        loadChildren: () =>
          import('./password/password.module').then((m) => m.PasswordModule),
      },
      {
        path: 'mobile-number',
        loadChildren: () =>
          import('./mobile-number/mobile-number.module').then(
            (m) => m.MobileNumberModule
          ),
      },
      {
        path: 'email',
        loadChildren: () =>
          import('./email/email.module').then((m) => m.EmailModule),
      },
      {
        path: 'app-setting',
        loadChildren: () =>
          import('./app-setting/app-setting.module').then(
            (m) => m.AppSettingModule
          ),
      },
      {
        path: 'privacy',
        loadChildren: () =>
          import('./privacy/privacy.module').then((m) => m.PrivacyModule),
      },
      {
        path: 'terms-and-conditions',
        loadChildren: () =>
          import('./terms-conditions/terms-conditions.module').then(
            (m) => m.TermsConditionsModule
          ),
      },
      {
        path: 'help-center',
        loadChildren: () =>
          import('./help-center/help-center.module').then(
            (m) => m.HelpCenterModule
          ),
      },
      {
        path: 'help',
        loadChildren: () =>
          import('./help/help.module').then((m) => m.HelpModule),
      },
      {
        path: '**',
        redirectTo: 'help',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
  ],
})
export class SettingsModule {}
