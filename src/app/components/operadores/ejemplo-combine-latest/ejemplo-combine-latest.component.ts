import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, map, startWith } from 'rxjs';

@Component({
  selector: 'app-ejemplo-combine-latest',
  templateUrl: './ejemplo-combine-latest.component.html',
  styleUrl: './ejemplo-combine-latest.component.css'
})
export class EjemploCombineLatestComponent {
  controlOne = new FormControl();
  controlTwo = new FormControl();
  //combinedResult$: Observable<string>;

  constructor() {
    
  }
}
