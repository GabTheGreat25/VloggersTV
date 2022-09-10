import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  onback = 'settings/app-setting';

  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onback]);
  }
  ngOnInit(): void {}
}
