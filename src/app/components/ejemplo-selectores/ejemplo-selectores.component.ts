import { Component, OnInit } from '@angular/core';
import { EjemploSelectoresService } from '../../services/ejemplo-selectores.service';

@Component({
  selector: 'app-ejemplo-selectores',
  templateUrl: './ejemplo-selectores.component.html',
  styleUrl: './ejemplo-selectores.component.css'
})
export class EjemploSelectoresComponent implements OnInit {

  constructor(private usersStore: EjemploSelectoresService) {}

  ngOnInit(): void {
  }
}
