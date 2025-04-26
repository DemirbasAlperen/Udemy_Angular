import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // login.component.html içinde bulunan signIn() metodu için tasarı
  constructor(      // servis tanımlandı    
    private router: Router
  ){}
  // Giriş yap butonuna tıklayınca layout a gideceğiz
  signIn(){
    this.router.navigateByUrl("/");   // anasayfa için / (boş sayfa) tanımladık
  }

}
