import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-live',
  templateUrl: './details-live.component.html',
  styleUrls: ['./details-live.component.scss'],
})
export class DetailsLiveComponent implements OnInit {
  nextRoute: string = '/dashboard/channel/contents/advisory-live';
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;

  constructor(private router: Router) {}

  next() {
    this.router.navigate([this.nextRoute]);
  }
  ngOnInit(): void {}
}
