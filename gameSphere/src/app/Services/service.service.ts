import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl: string = 'http://localhost:8080/log';

  constructor(private http: HttpClient) { }

  register(name: any) {
    return this.http.post(`${this.apiUrl}/new`, name).pipe(
      catchError(error => {
        console.error('Error during registration:', error);
        return throwError(error);
      })
    );
  }

  login(id: number, name: string, password: string, points: string) {
    const userData = {
      id: id,
      name: name,
      password: password,
      points: points
    };

    return this.http.post(`${this.apiUrl}/login`, userData).pipe(
      catchError(error => {
        console.error('Error during login:', error);
        return throwError(error);
      })
    );
  }
}
