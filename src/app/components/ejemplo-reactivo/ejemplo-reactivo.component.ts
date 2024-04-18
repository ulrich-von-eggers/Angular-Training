import { Component, ElementRef, ViewChild } from '@angular/core';
import { Subscription, filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-ejemplo-reactivo',
  templateUrl: './ejemplo-reactivo.component.html',
  styleUrl: './ejemplo-reactivo.component.css'
})
export class EjemploReactivoComponent {
  @ViewChild('myButton', { static: true }) myButton: ElementRef | undefined;
  private subscription: Subscription | undefined;

  constructor() { }
}
