import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { AuthService, fbLogIn } from 'src/app/states/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  background = 'transparent';
  facebook = `../../../assets/images/facebook.svg`;
  registerRoute: string = '/register';
  enterRoute: string = '/';

  public user: any;
  public loggedIn!: boolean;

  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private auth: AuthService
  ) {}

  register() {
    this.router.navigate([this.registerRoute]);
  }

  enter() {
    this.router.navigate([this.enterRoute]);
  }

  //Login
  signIn() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.auth.fbLogin(this.user);
    this.auth.loading$.subscribe((loading) => {
      if (!loading) {
        this.router.navigate([this.enterRoute]);
      }
    });
  }

  // Logout Function
  signOut() {
    this.auth.logout();
    if (this.user !== null) {
      this.authService.signOut();
      localStorage.clear();
    }
    console.log(this.auth.logout());
    console.log(this.authService.signOut());
  }

  ngOnInit() {
    //Get User Data
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }
}
