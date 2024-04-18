import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { EjemploReactivoComponent } from './components/ejemplo-reactivo/ejemplo-reactivo.component';
import { HttpExampleComponent } from './components/http-example/http-example.component';
import { EjemploSwitchmapComponent } from './components/operadores/ejemplo-switchmap/ejemplo-switchmap.component';
import { EjemploCombineLatestComponent } from './components/operadores/ejemplo-combine-latest/ejemplo-combine-latest.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EjemploTapComponent } from './components/operadores/ejemplo-tap/ejemplo-tap.component';
import { EjemploSelectoresComponent } from './components/ejemplo-selectores/ejemplo-selectores.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    EjemploReactivoComponent,
    HttpExampleComponent,
    EjemploSwitchmapComponent,
    EjemploCombineLatestComponent,
    NavbarComponent,
    EjemploTapComponent,
    EjemploSelectoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
