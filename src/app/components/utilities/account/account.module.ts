import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from '../utilities.module';
import { IconComponent } from './icon/icon.component';
import { LoginBodyComponent } from './body/login-body/login-body.component';
import { RegisterBodyComponent } from './body/register-body/register-body.component';

@NgModule({
  declarations: [
    AccountComponent,
    IconComponent,
    LoginBodyComponent,
    RegisterBodyComponent,
  ],
  imports: [CommonModule, RouterModule, UtilitiesModule],
  exports: [
    AccountComponent,
    IconComponent,
    LoginBodyComponent,
    RegisterBodyComponent,
  ],
})
export class AccountModule {}
