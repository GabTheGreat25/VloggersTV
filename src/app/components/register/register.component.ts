import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  background = 'transparent';
  loginRoute: string = '/login';
  constructor(private router: Router) {}

  login() {
    this.router.navigate([this.loginRoute]);
  }

  ngOnInit(): void {}
}
