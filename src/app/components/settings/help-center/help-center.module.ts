import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { HelpCenterComponent } from './help-center.component';

const routes: Routes = [
  {
    path: '',
    component: HelpCenterComponent,
  },
];

@NgModule({
  declarations: [HelpCenterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class HelpCenterModule {}
