import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RenklendirDirective } from './renklendir.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RenklendirDirective],
  template: `
  <h1 renklendir="green" test="taner">Directive</h1>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
