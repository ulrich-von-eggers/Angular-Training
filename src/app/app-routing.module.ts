import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HttpExampleComponent } from './components/http-example/http-example.component';
import { EjemploReactivoComponent } from './components/ejemplo-reactivo/ejemplo-reactivo.component';
import { EjemploSwitchmapComponent } from './components/operadores/ejemplo-switchmap/ejemplo-switchmap.component';
import { EjemploCombineLatestComponent } from './components/operadores/ejemplo-combine-latest/ejemplo-combine-latest.component';
import { EjemploTapComponent } from './components/operadores/ejemplo-tap/ejemplo-tap.component';
import { EjemploSelectoresComponent } from './components/ejemplo-selectores/ejemplo-selectores.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'http-example', component: HttpExampleComponent },
  { path: 'ejemplo-reactivo', component: EjemploReactivoComponent },
  { path: 'ejemplo-switchmap', component: EjemploSwitchmapComponent },
  { path: 'ejemplo-combinelatest', component: EjemploCombineLatestComponent },
  { path: 'ejemplo-tap', component: EjemploTapComponent },
  { path: 'ejemplo-selectores', component: EjemploSelectoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
