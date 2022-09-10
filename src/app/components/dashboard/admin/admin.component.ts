import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  gap = '1rem';
  rows = '6rem 1fr';
  constructor() {}

  ngOnInit(): void {}
}
