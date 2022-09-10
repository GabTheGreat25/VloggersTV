import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisory-video',
  templateUrl: './advisory-video.component.html',
  styleUrls: ['./advisory-video.component.scss'],
})
export class AdvisoryVideoComponent implements OnInit {
  nextRoute: string = '/dashboard/channel/contents/visibility-video';
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;
  route = [
    { route: '/upload-video' },
    { route: '/details-video' },
    { route: 'advisory-video' },
    { route: 'visibility-video' },
  ];
  constructor(private router: Router) {}

  next() {
    this.router.navigate([this.nextRoute]);
  }

  ngOnInit(): void {}
}
