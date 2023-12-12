import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;

  constructor(private http: HttpClient, private serviceService: ServiceService) {}

  username: string = '';
  password: string = '';
  isPasswordVisible = false;

  togglePassword() {
    const input = this.passwordInput.nativeElement;
    this.isPasswordVisible = !this.isPasswordVisible;

    if (this.isPasswordVisible) {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  registrarUsuario(event: Event) {
    event.preventDefault(); 

    const userData = {
      name: this.username, //Funcion que esta en el boton de ingresar
      password: this.password
    };

    // Llamada al método de registro del servicio
    this.serviceService.register(userData).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        // Realizar acciones adicionales después de un registro exitoso si es necesario
      },
      (error) => {
        console.error('Error durante el registro:', error);
        // Manejo de errores o acciones adicionales en caso de error
      }
    );
  }
}



  /*handleLogin(event: Event) {
    event.preventDefault();

    const userData = {
      username: this.username,
      password: this.password
    };
    // Resto de tu lógica

    this.http.post(`${this.serviceService.apiUrl}/log/`, { username: this.username, password: this.password })
    .subscribe(
      (response) => {
        console.log('Solicitud exitosa:', response);
        // Aca se puede realizar acciones adicionales después de una solicitud exitosa
      },
      (error) => {
        console.error('Error en la solicitud:', error);
        // Manejo de errores o acciones adicionales en caso de error
      }
    );
  }*/