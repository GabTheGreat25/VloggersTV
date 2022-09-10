import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayPerViewComponent } from './pay-per-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilitiesModule } from '../utilities/utilities.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: PayPerViewComponent,
  },
];

@NgModule({
  declarations: [PayPerViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    UtilitiesModule,
    NavbarModule,
  ],
})
export class PayPerViewModule {}
