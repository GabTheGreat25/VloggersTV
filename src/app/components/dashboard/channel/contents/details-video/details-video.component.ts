import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-video',
  templateUrl: './details-video.component.html',
  styleUrls: ['./details-video.component.scss'],
})
export class DetailsVideoComponent implements OnInit {
  nextRoute: string = '/dashboard/channel/contents/advisory-video';
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;

  constructor(private router: Router) {}

  next() {
    this.router.navigate([this.nextRoute]);
  }
  ngOnInit(): void {}
}
