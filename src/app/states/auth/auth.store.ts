import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
  user: IUser;
  refresh: string;
  token: string;
  fbToken: string;
}

export function createInitialState(): AuthState {
  return {
    user: {
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      deleted: false,
      DateCreated: '',
      DateUpdated: '',
    },
    fbToken: '',
    refresh: '',
    token: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(createInitialState());
  }
}
