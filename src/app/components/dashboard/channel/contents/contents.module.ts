import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesModule } from '../../../utilities/utilities.module';

const routes: Routes = [
  {
    path: '',
    component: ContentsComponent,
    children: [
      {
        path: 'visibility-live',
        loadChildren: () =>
          import('././visibility-live/visibility-live.module').then(
            (m) => m.VisibilityLiveModule
          ),
      },
      {
        path: 'advisory-live',
        loadChildren: () =>
          import('././advisory-live/advisory-live.module').then(
            (m) => m.AdvisoryLiveModule
          ),
      },
      {
        path: 'details-live',
        loadChildren: () =>
          import('././details-live/details-live.module').then(
            (m) => m.DetailsLiveModule
          ),
      },
      {
        path: 'upload-live',
        loadChildren: () =>
          import('././upload-live/upload-live.module').then(
            (m) => m.UploadLiveModule
          ),
      },
      {
        path: 'live',
        loadChildren: () =>
          import('././live/live.module').then((m) => m.LiveModule),
      },
      {
        path: 'visibility-video',
        loadChildren: () =>
          import('././visibility-video/visibility-video.module').then(
            (m) => m.VisibilityVideoModule
          ),
      },
      {
        path: 'advisory-video',
        loadChildren: () =>
          import('././advisory-video/advisory-video.module').then(
            (m) => m.AdvisoryVideoModule
          ),
      },
      {
        path: 'details-video',
        loadChildren: () =>
          import('././details-video/details-video.module').then(
            (m) => m.DetailsVideoModule
          ),
      },
      {
        path: 'upload-video',
        loadChildren: () =>
          import('././upload-video/upload-video.module').then(
            (m) => m.UploadVideoModule
          ),
      },
      {
        path: 'video',
        loadChildren: () =>
          import('././video/video.module').then((m) => m.VideoModule),
      },
      {
        path: '**',
        redirectTo: 'video',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [ContentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UtilitiesModule],
})
export class ContentsModule {}
