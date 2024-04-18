import { Component } from '@angular/core';
import { BasicComponentStoreService } from '../../services/basic-component-store.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  
  
  constructor(private store: BasicComponentStoreService) { }

}
