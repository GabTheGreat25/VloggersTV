import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibilityLiveComponent } from './visibility-live.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: VisibilityLiveComponent,
  },
];
@NgModule({
  declarations: [VisibilityLiveComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class VisibilityLiveModule {}
