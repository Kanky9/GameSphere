import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

apiUrl: string = 'http://localhost:8080/log/';

  constructor(private http: HttpClient) { }

  persona(id: number, name: string, password: string, points: string){
    const personaData ={
      id: id, //Creo objeto id llamando a persona
      name: name,
      password: password,
      points: points
    };

   /* Funcion para el login (No esta hecho todavía)
   return this.http.post(`${this.apiUrl}/login`, personaData).pipe(
      tap(() => {
        
         this.sessionService.login(username);  esto no va
      })
    );
    */
  }
  new(name: any) {
    return this.http.post(`${this.apiUrl}/log`, name); //Trabajo de balma por hoy terminados
  }
}