import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Input() gap: string = '';
  @Input() rows: string = '';
  constructor() {}

  ngOnInit(): void {}
}
