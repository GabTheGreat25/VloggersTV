import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})
export class TermsConditionsComponent implements OnInit {
  onback = 'settings/help';
  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onback]);
  }

  ngOnInit(): void {}
}
