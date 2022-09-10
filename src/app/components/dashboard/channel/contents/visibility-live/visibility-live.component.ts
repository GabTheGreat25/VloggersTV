import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visibility-live',
  templateUrl: './visibility-live.component.html',
  styleUrls: ['./visibility-live.component.scss'],
})
export class VisibilityLiveComponent implements OnInit {
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
