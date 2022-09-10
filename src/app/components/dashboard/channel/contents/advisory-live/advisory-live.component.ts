import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advisory-live',
  templateUrl: './advisory-live.component.html',
  styleUrls: ['./advisory-live.component.scss'],
})
export class AdvisoryLiveComponent implements OnInit {
  nextRoute: string = '/dashboard/channel/contents/visibility-live';
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;

  constructor(private router: Router) {}

  next() {
    this.router.navigate([this.nextRoute]);
  }

  ngOnInit(): void {}
}
