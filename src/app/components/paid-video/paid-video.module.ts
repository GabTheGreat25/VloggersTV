import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';
import { PaidVideoComponent } from './paid-video.component';

const routes: Routes = [
  {
    path: '',
    component: PaidVideoComponent,
  },
];

@NgModule({
  declarations: [PaidVideoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
  ],
})
export class PaidVideoModule {}
