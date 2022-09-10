import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  background = '#2E2E2E';
  onBack = '/';
  onHelpCenter = 'settings/help-center';
  onTerms = 'settings/terms-and-conditions';
  onPrivacy = 'settings/privacy';
  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onBack]);
  }

  helpCenter() {
    this.router.navigate([this.onHelpCenter]);
  }

  terms() {
    this.router.navigate([this.onTerms]);
  }

  privacy() {
    this.router.navigate([this.onPrivacy]);
  }

  ngOnInit(): void {}
}
