import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { HelpComponent } from './help.component';

const routes: Routes = [
  {
    path: '',
    component: HelpComponent,
  },
];

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class HelpModule {}
