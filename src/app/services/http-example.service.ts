import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpExampleService {

  private dataUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";

  constructor(private http: HttpClient) { }
}
