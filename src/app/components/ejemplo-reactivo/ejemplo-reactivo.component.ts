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



  ngAfterViewInit() {
    if (this.myButton) {
      const clicks = fromEvent<MouseEvent>(this.myButton.nativeElement, 'click');
      const positions = clicks.pipe(
        map((event: MouseEvent) => ({ x: event.clientX, y: event.clientY })),
        filter(pos => pos.x < 500)
      );

      this.subscription = positions.subscribe(pos => {
        console.log('Click position:', pos);
      });
    }
  }

  ngOnDestroy() {
    // Asegurarse de desuscribirse para evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
