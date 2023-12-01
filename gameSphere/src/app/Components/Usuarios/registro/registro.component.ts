import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Services/service.service'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private http: HttpClient, private serviceService: ServiceService) {}

  new(name: any) {
    // Accede a la URL base a través del servicio ServiceService
    return this.http.post(`${this.serviceService.apiUrl}/log/`, name); // Trabajo de balma por hoy terminado
  }

    // Función para realizar una nueva acción (ajusta según tus necesidades)
    realizarAccion(name: any) {
      this.http.post(`${this.serviceService.apiUrl}/log/`, name).subscribe(
        (response) => {
          console.log('Solicitud exitosa:', response);
          // Aquí puedes realizar acciones adicionales después de una solicitud exitosa
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Manejo de errores o acciones adicionales en caso de error
        }
      );
    }
  
    // Función para realizar la solicitud nueva
    /*new(name: any) {
      this.realizarAccion(name);
    }*/
}