import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  background = '#2E2E2E';
  changePhoto = `../../../assets/images/change-photo.svg`;
  constructor() {}

  ngOnInit(): void {}
}
