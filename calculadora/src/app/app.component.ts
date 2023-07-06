import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: string = '';

  appendNumber(number: number) {
    this.display += number.toString();
  }

  appendOperator(operator: string) {
    this.display += operator;
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
  }
}