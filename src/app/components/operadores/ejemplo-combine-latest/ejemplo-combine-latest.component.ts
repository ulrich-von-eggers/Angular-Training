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
  combinedResult$: Observable<string>;

  constructor() {
    this.combinedResult$ = combineLatest([
      this.controlOne.valueChanges.pipe(startWith(this.controlOne.value)),
      this.controlTwo.valueChanges.pipe(startWith(this.controlTwo.value))
    ]).pipe(
      map(([first, second]) => `First: ${first}, Second: ${second}`)
    );
  }
}
