import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { TermsConditionsComponent } from './terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: TermsConditionsComponent,
  },
];

@NgModule({
  declarations: [TermsConditionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class TermsConditionsModule {}
