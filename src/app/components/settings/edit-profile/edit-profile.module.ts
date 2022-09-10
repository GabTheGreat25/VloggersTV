import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { EditProfileComponent } from './edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: EditProfileComponent,
  },
];

@NgModule({
  declarations: [EditProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class EditProfileModule {}
