import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  template: `
  <!-- navbar içine link atayarak da sayfalar arası geçiş yapabiliriz -->
  <!-- <nav>
    <a routerLink="./home">Home Page</a> ||
    <a routerLink="./about">About Page</a> ||
    <a routerLink="./contact">Contact Page</a> ||
  </nav> -->

  <!-- Angular ın hangi componenti tam nerede açacağını işaretlemek için router-outlet yi kullanırız -->
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}
