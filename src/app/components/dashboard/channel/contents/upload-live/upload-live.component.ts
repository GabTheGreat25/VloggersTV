import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-live',
  templateUrl: './upload-live.component.html',
  styleUrls: ['./upload-live.component.scss'],
})
export class UploadLiveComponent implements OnInit {
  nextRoute: string = '/dashboard/channel/contents/details-live';
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;

  constructor(private router: Router) {}

  next() {
    this.router.navigate([this.nextRoute]);
  }
  ngOnInit(): void {}
}
