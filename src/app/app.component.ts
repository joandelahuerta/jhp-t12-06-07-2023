import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';
  //Numeros
  appendNumber(number: number) {
    this.display += number.toString();
  }
  //Operaciones
  appendOperator(operator: string) {
    this.display += operator;
  }
  //Calcular operacion insertada
  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }
  //Limpiar
  clear() {
    this.display = '';
  }
}