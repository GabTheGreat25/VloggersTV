import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss'],
})
export class HelpCenterComponent implements OnInit {
  onback = 'settings/help';

  constructor(private router: Router) {}

  back() {
    this.router.navigate([this.onback]);
  }

  ngOnInit(): void {}
}
