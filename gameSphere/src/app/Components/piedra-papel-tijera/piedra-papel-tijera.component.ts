import { Component } from '@angular/core';

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
  opciones: Opcion[] = Object.values(Opcion);
  opcionJugador!: Opcion; //Se puso el signo de exclamacion para que le de un valor indefinido o nulo 
  opcionComputadora!: Opcion;
  resultado: string | undefined;

  jugar(opcion: Opcion): void {
    this.opcionJugador = opcion;
    this.opcionComputadora = this.generarOpcionComputadora();
    this.calcularResultado();
  }

  //Esta funcion es para darle de forma automatica, el valor a la computadora
  generarOpcionComputadora(): Opcion { 
    const opciones = Object.values(Opcion);
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
  }

  //Esta funcion sirve para evaluar el las opciones del jugador y de la computadora
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
  //Esta funcion es para que retorne la imagen que le agreguemos, piedra, papel, tijera. Segun lo que elija el usuario
  obtenerImagen(opcion: Opcion): string {
    switch (opcion) {
      case Opcion.PIEDRA:
        return '../../assets/img/rock.png';
      case Opcion.PAPEL:
        return '../../assets/img/paper.png';
      case Opcion.TIJERA:
        return '../../assets/img/scissors.png';
      default:
        return '';
    }
  }
}