import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  onback = 'settings/help';
  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onback]);
  }

  ngOnInit(): void {}
}
