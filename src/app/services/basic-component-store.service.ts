import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';


interface CounterState {
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class BasicComponentStoreService extends ComponentStore<CounterState>{

  constructor() { 
    super({ count: 0 }); // Estado inicial
  }
}
