import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss'],
})
export class DownloadsComponent implements OnInit {
  qrCode = `${env.CDN_URL}qrcode.png`;
  playstore = `../../../assets/images/googleplay.svg`;
  appstore = `../../../assets/images/appstore.svg`;

  playStore() {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.google.android.youtube';
  }

  appStore() {
    window.location.href =
      'https://apps.apple.com/us/app/youtube-watch-listen-stream/id544007664';
  }

  constructor() {}
  ngOnInit(): void {}
}
