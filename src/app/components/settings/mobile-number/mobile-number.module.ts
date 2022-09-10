import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { MobileNumberComponent } from './mobile-number.component';

const routes: Routes = [
  {
    path: '',
    component: MobileNumberComponent,
  },
];

@NgModule({
  declarations: [MobileNumberComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class MobileNumberModule {}
