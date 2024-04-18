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
}
