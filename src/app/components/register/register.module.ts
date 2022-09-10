import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilitiesModule } from '../utilities/utilities.module';
import { AccountModule } from '../utilities/account/account.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UtilitiesModule,
    AccountModule,
    NavbarModule,
  ],
})
export class RegisterModule {}
