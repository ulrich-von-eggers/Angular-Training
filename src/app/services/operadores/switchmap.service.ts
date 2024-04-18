import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchmapService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  search(term: string): Observable<any[]> {
    if (term === '') {
      return of([]); // Retorna un observable vacío si la búsqueda está vacía
    }
    return this.http.get<any[]>(`${this.apiUrl}?username=${term}`);
  }
}
