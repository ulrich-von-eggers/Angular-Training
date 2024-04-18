import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserState {
  users: User[];
  selectedUserId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class EjemploSelectoresService extends ComponentStore<UserState>{

  constructor() {
    super({ users: [] });
  }

  readonly users$ = this.select(state => state.users);
  readonly selectedUserId$ = this.select(state => state.selectedUserId);
  readonly selectedUser$: Observable<User | undefined> = this.select(
    this.users$,
    this.selectedUserId$,
    (users, selectedUserId) => users.find(user => user.id === selectedUserId)
  );

  // Setters
  setUsers(users: User[]) {
    this.setState(state => ({ ...state, users }));
  }

  setSelectedUserId(id: number) {
    this.setState(state => ({ ...state, selectedUserId: id }));
  }
}
