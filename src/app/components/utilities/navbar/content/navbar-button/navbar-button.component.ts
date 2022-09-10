import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss'],
})
export class NavbarButtonComponent implements OnInit {
  videoUpload = `../../../assets/images/videoUpload.svg`;
  goLive = `../../../assets/images/goLive.svg`;
  isHidden: boolean = false;
  uploadVideo: string = '/dashboard/channel/contents/upload-video/';
  liveVideo: string = '/dashboard/channel/contents/upload-live/';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onHide() {
    this.isHidden = !this.isHidden;
  }

  clickOutside() {
    this.isHidden = false;
  }

  onUpload() {
    this.router.navigate([this.uploadVideo]);
  }

  onLive() {
    this.router.navigate([this.liveVideo]);
  }
}
