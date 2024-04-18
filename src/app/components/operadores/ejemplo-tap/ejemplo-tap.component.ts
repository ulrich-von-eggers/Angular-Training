import { Component, OnInit } from '@angular/core';
import { HttpExampleService } from '../../../services/http-example.service';

/*
El operador tap de RxJS es útil para ejecutar efectos secundarios dentro de flujos de datos observables, como registrar valores o realizar acciones 
que no modifican los datos transmitidos por el flujo. 
tap se usa comúnmente para depuración, registros de auditoría, o para disparar acciones externas que no deberían alterar el resultado del observable.
*/

@Component({
  selector: 'app-ejemplo-tap',
  templateUrl: './ejemplo-tap.component.html',
  styleUrl: './ejemplo-tap.component.css'
})
export class EjemploTapComponent implements OnInit {
  data: any;
  constructor(private httpExampleService: HttpExampleService) { }

  ngOnInit(): void {
    
  }
}
