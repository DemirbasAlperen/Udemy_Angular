import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // import kısmına component class isimlerini yazdık. Sorasında app.component.html içine bunların selector (element) isimlerini yazıyoruz.
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorld:string = "Hello, World! from TS";
  // burada class içine nasıl değişken tanımlanır onu gösterdik şimdi de bu değişkeni html sayfamızda gösterelim

  // p elementine verilen red class ını dinamik haline getirme
  pClassName: string = "blue";

  // class içinde fonksiyon tanımladık
  clickMe(){   // function
    alert("Beni tıkladın...")
  }

  changeHelloWorldVariable(event:any){
    this.helloWorld = event.target.value
  }

  // string değer döndüren fonksiyon -> property binding olarak kullanılır.
  setPElementClass(){
    return "blue"
  }
}
