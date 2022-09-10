import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  onback = 'settings/app-setting';

  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onback]);
  }

  ngOnInit(): void {}
}
