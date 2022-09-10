import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
];

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class ContentModule {}
