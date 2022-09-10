import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vloggerstv';

  navigate() {
    if (
      navigator.userAgent.toLowerCase().indexOf('iphone' || 'ipod' || 'ipad') >
      -1
    ) {
      window.location.href =
        'https://apps.apple.com/us/app/youtube-watch-listen-stream/id544007664';
    }

    if (
      navigator.userAgent
        .toLowerCase()
        .indexOf('android' || 'blackberry' || 'IEMobile') > -1
    ) {
      window.location.href =
        'https://play.google.com/store/apps/details?id=com.google.android.youtube';
    }
  }

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.navigate();
  }
}
