import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
  },
];

@NgModule({
  declarations: [CommentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class CommentsModule {}
