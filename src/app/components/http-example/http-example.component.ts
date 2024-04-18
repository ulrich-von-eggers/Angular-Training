import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpExampleService } from '../../services/http-example.service';

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrl: './http-example.component.css'
})
export class HttpExampleComponent {
  data: any;
  private subscription: Subscription | undefined;

  constructor(private dataService: HttpExampleService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.fetchData().subscribe({
      next: (result) => {
        this.data = result;
      },
      error: (error) => {
        console.error('Error al cargar datos:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
