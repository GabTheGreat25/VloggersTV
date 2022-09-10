import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { NavbarModule } from '../utilities/navbar/navbar.module';
import { PaymentOptionComponent } from './payment-option.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentOptionComponent,
  },
];

@NgModule({
  declarations: [PaymentOptionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UtilitiesModule,
    NavbarModule,
  ],
})
export class PaymentOptionModule {}
