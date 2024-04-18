import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchmapService {
  private apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  
}
