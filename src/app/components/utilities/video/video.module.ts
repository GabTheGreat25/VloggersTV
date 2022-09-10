import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { RouterModule } from '@angular/router';
import { VideoBodyComponent } from './body/video-body/video-body.component';
import { CommentBodyComponent } from './comment/comment-body/comment-body.component';
import { CommentContentComponent } from './comment/comment-content/comment-content.component';
import { VideoDirective } from 'src/app/directives/video.directive';
import { VideoContentComponent } from './body/video-content/video-content.component';

@NgModule({
  declarations: [
    VideoComponent,
    VideoBodyComponent,
    CommentBodyComponent,
    CommentContentComponent,
    VideoDirective,
    VideoContentComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    VideoComponent,
    VideoBodyComponent,
    CommentBodyComponent,
    CommentContentComponent,
    VideoDirective,
    VideoContentComponent,
  ],
})
export class VideoModule {}
