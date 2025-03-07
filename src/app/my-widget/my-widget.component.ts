import { Component } from '@angular/core';

@Component({
  selector: 'my-angular-widget',
  template: `<div>
               <h2>Hola desde Angular Web Component</h2>
               <button (click)="sendMessage()">Enviar Mensaje</button>
             </div>`,
  styles: [`
    div { border: 2px solid blue; padding: 10px; }
    h2 { color: blue; }
  `]
})
export class MyWidgetComponent {
  sendMessage() {
    alert('Mensaje desde Angular Web Component');
  }
}
