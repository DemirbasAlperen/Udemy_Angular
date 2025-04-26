import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // burada rout yapısını kullanmak için yazdığımız servis (önce constructor tanımlanır)
  constructor(
    private router: Router
  ){}

  // html içinde bulunan button içindeki method fonksiyonunu buraya yazdık
  method() {
    // navigate ile yönlendirme yapılır ve içine bir array alır ve içine gideceği yer yazılır
    this.router.navigate(["about"]);

    // aşağıdaki gibi de kullanılabilir.
    // this.router.navigateByUrl("../about"); 
  }
}
