import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // parametre yakalamak için yazılan servis
  constructor(
    private activated: ActivatedRoute
  ){
    // en pratik yöntemi paremetreyi constructor içinde yakalamak 
    // subscribe adres çubuğuna yazılan değeri sürekli takip eder
    // res rastgele verilen isim
    this.activated.params.subscribe((res) => {
      console.log(res['params']);  // adres çubuğunda yazılan değerin console da bize array olarak geldiğini görebiliriz. Yani res bir objedir. Eğer değeri yakalamak istersem ['params'] yazarım
    })
  }
}
