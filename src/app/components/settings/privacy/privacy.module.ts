import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { PrivacyComponent } from './privacy.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyComponent,
  },
];

@NgModule({
  declarations: [PrivacyComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class PrivacyModule {}
