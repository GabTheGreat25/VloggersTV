import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { PasswordComponent } from './password.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordComponent,
  },
];

@NgModule({
  declarations: [PasswordComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class PasswordModule {}
