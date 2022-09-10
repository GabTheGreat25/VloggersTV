import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.scss'],
})
export class MobileNumberComponent implements OnInit {
  onback = 'settings/app-setting';

  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onback]);
  }
  ngOnInit(): void {}
}
