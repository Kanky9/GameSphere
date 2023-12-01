import { Component, HostListener, OnInit } from '@angular/core';

// Enumeración para representar las direcciones posibles del juego
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Interfaz que define la posición en el tablero
interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.css']
})
export class SnakeGameComponent implements OnInit {

  ngOnInit() {

  }

  // Propiedades del componente
  canvasWidth: number = 600; // Ancho del lienzo del juego
  canvasHeight: number = 500; // Alto del lienzo del juego
  squareSize: number = 20; // Tamaño de cada cuadro en el lienzo
  snake: Position[] = []; // Arreglo que almacena la posición de cada parte de la serpiente
  food: Position = { x: 0, y: 0 }; // Posición de la comida
  direction: Direction = Direction.Right; // Dirección actual de la serpiente
  score: number = 0; // Puntuación del juego
  highScore: number = 0; // Puntuación más alta alcanzada
  gameOver: boolean = false; // Indica si el juego ha terminado
  gameInterval: any; // Intervalo de tiempo para el bucle principal del juego

 

  startGame() {
    // Reinicia las propiedades del juego para empezar una nueva partida
    this.snake = [];
    this.direction = Direction.Right;
    this.score = 0;
    this.gameOver = false;

    this.spawnFood(); // Genera la posición inicial de la comida

    // Agrega la cabeza de la serpiente en la posición inicial (esquina superior izquierda del tablero)
    this.snake.push({ x: 0, y: 0 });

    // Inicia el intervalo de juego que ejecuta el método "move" cada 100 milisegundos
    this.gameInterval = setInterval(() => {
      this.move();
    }, 100);
  }

  move() {
    if (this.gameOver) {
      // Si el juego ha terminado, se detiene el intervalo y se verifica si se alcanzó una nueva puntuación más alta
      clearInterval(this.gameInterval);
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      return;
    }

    const head = this.getHeadPosition(); // Obtiene la posición de la cabeza de la serpiente
    let newHead: Position;

    // Calcula la nueva posición de la cabeza de acuerdo a la dirección actual
    switch (this.direction) {
      case Direction.Up:
        newHead = { x: head.x, y: head.y - 1 };
        break;
      case Direction.Down:
        newHead = { x: head.x, y: head.y + 1 };
        break;
      case Direction.Left:
        newHead = { x: head.x - 1, y: head.y };
        break;
      case Direction.Right:
        newHead = { x: head.x + 1, y: head.y };
        break;
    }

    // Verifica si hay colisión con la serpiente o los límites del tablero
    if (this.checkCollision(newHead) || this.checkBoundaryCollision(newHead)) {
      this.gameOver = true;
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      return;
    }

    // Agrega la nueva cabeza a la serpiente
    this.snake.unshift(newHead);

    // Verifica si hay colisión con la comida
    if (this.checkFoodCollision(newHead)) {
      this.score++; // Incrementa la puntuación
      this.spawnFood(); // Genera una nueva posición para la comida
    } else {
      this.snake.pop(); // Elimina la última parte de la serpiente si no hay colisión con la comida
    }
  }

  getHeadPosition(): Position {
    return this.snake[0]; // Obtiene la posición de la cabeza de la serpiente
  }

  checkCollision(position: Position): boolean {
    // Verifica si la posición está en alguna parte del cuerpo de la serpiente
    return this.snake.some((part) => part.x === position.x && part.y === position.y);
  }

  checkBoundaryCollision(position: Position): boolean {
    // Verifica si la posición está fuera de los límites del tablero
    return (
      position.x < 0 ||
      position.x >= this.canvasWidth / this.squareSize ||
      position.y < 0 ||
      position.y >= this.canvasHeight / this.squareSize
    );
  }

  checkFoodCollision(position: Position): boolean {
    // Verifica si la posición coincide con la posición de la comida
    return position.x === this.food.x && position.y === this.food.y;
  }

  spawnFood() {
    // Genera una posición aleatoria para la comida dentro de los límites del tablero
    this.food.x = Math.floor(Math.random() * (this.canvasWidth / this.squareSize));
    this.food.y = Math.floor(Math.random() * (this.canvasHeight / this.squareSize));
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Maneja los eventos de teclado y actualiza la dirección de la serpiente según la tecla presionada
    switch (event.key) {
      case 'ArrowUp':
        if (this.direction !== Direction.Down)
          this.direction = Direction.Up;
        break;
      case 'ArrowDown':
        if (this.direction !== Direction.Up)
          this.direction = Direction.Down;
        break;
      case 'ArrowLeft':
        if (this.direction !== Direction.Right)
          this.direction = Direction.Left;
        break;
      case 'ArrowRight':
        if (this.direction !== Direction.Left)
          this.direction = Direction.Right;
        break;
    }
  }
}