import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;
  goLive = `../../../assets/images/goLive.svg`;
  videoImage = '../../../assets/images/videoImage.svg';
  greenGlobe = '../../../assets/images/greenGlobe.svg';
  redGlobe = '../../../assets/images/redGlobe.svg';
  pencil = '../../../assets/images/pencil.svg';
  trash = '../../../assets/images/trash.svg';
  nextRoute = 'dashboard/admin/create';

  constructor(private router: Router) {}

  next() {
    this.router.navigate([this.nextRoute]);
  }

  ngOnInit(): void {}
}
