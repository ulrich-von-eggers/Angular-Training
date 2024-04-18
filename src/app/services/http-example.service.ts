import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  private dataUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get(this.dataUrl).pipe(
      tap(data => console.log('Datos recibidos:', data)),
      map(data => {
        return data;
      }),
      catchError(error => {
        return throwError(() => new Error('Algo salió mal. Por favor, intenta de nuevo más tarde.'));
      })
    );
  }

  fetchDataWithTap(): Observable<any> {
    return this.http.get<any>(this.dataUrl).pipe(
      tap(data => console.log('Data received: ', data)), // Efecto secundario para registrar la respuesta
      catchError(error => {
        console.error('Error occurred: ', error);
        return of([]); 
      })
    );
  }
}
