import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisoryLiveComponent } from './advisory-live.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: AdvisoryLiveComponent,
  },
];

@NgModule({
  declarations: [AdvisoryLiveComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class AdvisoryLiveModule {}
