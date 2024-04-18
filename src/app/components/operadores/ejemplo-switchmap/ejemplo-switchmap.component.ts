import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, catchError, debounceTime, of, switchMap } from 'rxjs';
import { SwitchmapService } from '../../../services/operadores/switchmap.service';

/*
Supongamos que quieres hacer una llamada a una API para buscar información cada vez que el usuario teclea algo en un campo de búsqueda, 
cancelando la solicitud anterior si el usuario ha cambiado la entrada antes de que la respuesta llegue
Este patrón es eficiente para aplicaciones con búsquedas dinámicas, asegurando que los recursos y 
las respuestas estén sincronizados con el estado más reciente deseado por el usuario. */


@Component({
  selector: 'app-ejemplo-switchmap',
  templateUrl: './ejemplo-switchmap.component.html',
  styleUrl: './ejemplo-switchmap.component.css'
})
export class EjemploSwitchmapComponent {
  searchControl = new FormControl();
  results$: Observable<any[]>;

  constructor(private searchService: SwitchmapService) {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(300), // Espera 300ms tras cada pulsación antes de emitir el último valor
      switchMap(term => this.searchService.search(term)),
      catchError(error => {
        console.error('Error occurred:', error);
        return of([]);
      })
    );
  }
}
