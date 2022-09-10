import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import {
  authLoginUser,
  authLogout,
  authSetAccessToken,
  fbLogIn,
} from './auth.actions';
import { Actions } from '@datorama/akita-ng-effects';
import { AuthQuery } from './auth.query';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _login = new BehaviorSubject<boolean>(false);
  error$ = this.query.selectError();
  loading$ = this.query.selectLoading();
  login$ = this._login.asObservable();
  isLogin = false;

  constructor(
    private store: AuthStore,
    private actions: Actions,
    private query: AuthQuery
  ) {
    this.query.auth$.subscribe((auth) => {
      this.isLogin = !!auth.token && !!auth.refresh;
      this._login.next(this.isLogin);
    });
  }

  get value() {
    return this.store.getValue();
  }

  get refresh() {
    return this.value.refresh;
  }

  get token() {
    return this.value.token;
  }

  get user() {
    return this.value.user;
  }

  setAccessToken(token: string) {
    this.actions.dispatch(authSetAccessToken({ token }));
  }

  login(body: { credential: string }) {
    this.actions.dispatch(authLoginUser(body));
  }

  logout() {
    this.actions.dispatch(authLogout());
  }

  fbLogin(action: any) {
    this.actions.dispatch(fbLogIn({ action }));
  }
}
