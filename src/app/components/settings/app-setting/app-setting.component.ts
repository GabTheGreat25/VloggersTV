import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.scss'],
})
export class AppSettingComponent implements OnInit {
  background = '#2E2E2E';
  onBack = '/';
  onEmail = 'settings/email';
  onPhoneNumber = 'settings/mobile-number';
  onPassword = 'settings/password';
  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onBack]);
  }

  email() {
    this.router.navigate([this.onEmail]);
  }

  phoneNumber() {
    this.router.navigate([this.onPhoneNumber]);
  }

  password() {
    this.router.navigate([this.onPassword]);
  }

  ngOnInit(): void {}
}
