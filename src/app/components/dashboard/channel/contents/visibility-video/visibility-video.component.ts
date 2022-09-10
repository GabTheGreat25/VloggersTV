import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visibility-video',
  templateUrl: './visibility-video.component.html',
  styleUrls: ['./visibility-video.component.scss'],
})
export class VisibilityVideoComponent implements OnInit {
  background = '#2E2E2E';
  upload = `../../../assets/images/upload.svg`;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
