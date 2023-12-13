import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Persona } from '../Models/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl: string = 'http://localhost:8080/log';

  constructor(private http: HttpClient) { }

  register(persona: Persona) {
    return this.http.post(`${this.apiUrl}/save`, persona).pipe(
      catchError(error => {
        console.error('Error during registration:', error);
        return throwError(error);
      })
    );
  }
}