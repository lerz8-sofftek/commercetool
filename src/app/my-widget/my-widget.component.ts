import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Provides *ngIf, *ngFor, pipes, etc.

@Component({
  selector: 'app-simple-button',
  standalone: true, // ✅ Standalone component (Angular 19)
  imports: [CommonModule], // ✅ Enables common directives like *ngIf, *ngFor
  template: `<button (click)="handleClick()">Click Me</button>`,
  styles: [`
    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class SimpleButtonComponent {
  handleClick() {
    alert('Button Clicked!');
  }
}
