import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.scss'],
})
export class UploadVideoComponent implements OnInit {
  nextRoute: string = '/dashboard/channel/contents/details-video';
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;

  constructor(private router: Router) {}

  next() {
    this.router.navigate([this.nextRoute]);
  }

  ngOnInit(): void {}
}
