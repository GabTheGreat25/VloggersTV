import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { EmailComponent } from './email.component';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent,
  },
];

@NgModule({
  declarations: [EmailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class EmailModule {}
