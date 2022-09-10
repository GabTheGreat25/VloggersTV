import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { tap } from 'rxjs';
import { ApiService } from '../../services';
import * as actions from './auth.actions';
import { AuthStore } from './auth.store';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: AuthStore,
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  @Effect()
  authLoginUser$ = this.actions$.pipe(
    ofType(actions.authLoginUser),
    tap(async (action) => {
      this.store.setLoading(true);
      const request = {
        [action.credential.includes('@') ? 'email' : '']: action.credential,
      };

      const {
        message,
        data,
        status,
        meta: { token, refresh },
      } = await this.api.post<IUser>('/login', request, true);

      if (status !== 'success') this.store.setError({ message });
      this.store.update(() => ({ user: data[0], token, refresh }));
      this.store.setLoading(false);
    })
  );

  @Effect()
  authLogout$ = this.actions$.pipe(
    ofType(actions.authLogout),
    tap(async () => {
      this.store.reset();
      this.router.navigate(['/']);
    })
  );

  @Effect()
  authSetAccessToken$ = this.actions$.pipe(
    ofType(actions.authSetAccessToken),
    tap(async ({ token }) => {
      this.store.update((state) => ({ ...state, token }));
    })
  );

  @Effect()
  fbLogIn$ = this.actions$.pipe(
    ofType(actions.fbLogIn),
    tap(async ({ action }) => {
      this.store.update(() => ({ ...action }));
      localStorage.setItem('UserData', JSON.stringify({ ...action }));
    })
  );
}
