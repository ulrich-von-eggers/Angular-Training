import { Component } from '@angular/core';
import { BasicComponentStoreService } from '../../services/basic-component-store.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$ = this.store.count$;
  
  constructor(private store: BasicComponentStoreService) { }

  increment() {
    this.store.increment();
  }

  decrement() {
    this.store.decrement();
  }
}
