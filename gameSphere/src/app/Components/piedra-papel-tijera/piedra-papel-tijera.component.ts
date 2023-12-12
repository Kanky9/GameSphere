import { Component } from '@angular/core';

// Enumeración que representa las opciones del juego
enum Opcion {
  PIEDRA = 'Piedra',
  PAPEL = 'Papel',
  TIJERA = 'Tijera',
}

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {
  // Array que contiene las opciones del juego
  opciones: Opcion[] = Object.values(Opcion);

  // Variables para almacenar la opción elegida por el jugador y la computadora
  opcionJugador!: Opcion;
  opcionComputadora!: Opcion;

  // Variable para almacenar el resultado del juego
  resultado: string | undefined;

  // Función que se ejecuta cuando el jugador elige una opción
  jugar(opcion: Opcion): void {
    this.opcionJugador = opcion;
    this.opcionComputadora = this.generarOpcionComputadora(); // Se elige una opción aleatoria para la computadora
    this.calcularResultado(); // Se determina el resultado del juego
  }

  // Genera una opción aleatoria para la computadora
  generarOpcionComputadora(): Opcion { 
    const opciones = Object.values(Opcion);
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
  }

  // Calcula el resultado del juego comparando las opciones elegidas por el jugador y la computadora
  calcularResultado(): void {  
    if (this.opcionJugador === this.opcionComputadora) {
      this.resultado = 'EMPATE';
    } else if (
      (this.opcionJugador === Opcion.PIEDRA && this.opcionComputadora === Opcion.TIJERA) ||
      (this.opcionJugador === Opcion.PAPEL && this.opcionComputadora === Opcion.PIEDRA) ||
      (this.opcionJugador === Opcion.TIJERA && this.opcionComputadora === Opcion.PAPEL)
    ) {
      this.resultado = 'GANASTE :D';
    } else {
      this.resultado = 'PERDISTE :,(';
    }
  }

  // Retorna la URL de la imagen correspondiente a la opción elegida por el jugador
  obtenerImagen(opcion: Opcion): string {
    switch (opcion) {
      case Opcion.PIEDRA:
        return '../../../assets/img/rock.png';
      case Opcion.PAPEL:
        return '../../../assets/img/paper.png';
      case Opcion.TIJERA:
        return '../../../assets/img/scissors.png';
      default:
        return '';
    }
  }
}