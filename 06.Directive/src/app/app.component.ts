import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValidateDirective } from './validate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ValidateDirective],
  template: `
  <!-- <h1 renklendir="green" test="taner">Directive</h1> -->
  <h1>Directive</h1> 
  <form>
    <input id="name" autocomplete="off" validate type="text" required minlength="3">
    <!-- validate : validate.directive.ts içinde oluşturduğumuz attribute -->
    <div></div>
    <button type="submit">Send</button>
  </form>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  // directive oluşturmak için buradaki kodun tamamını kesip aldık
}
