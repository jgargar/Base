import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Bases'
  counter: number = 10

  incrementar(): void {
    this.counter++
  }

  
  decrementar(): void {
    this.counter--
  }

  
  reset(): void {
    this.counter = 10
  }

  get dameTitle(): String {
    return this.title
  }
}
