import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Şart Blogları</h1>
  @if (showFirstWord) {
    <!--  burada style içinde ternary operatörünü kullandık. Ayrıca bunu yazının devamında da yapabiliyoruz -->
    <p style="color: {{ showFirstWord === true ? 'red' : '' }}">Birinci yazı {{ showFirstWord === true ? 'red' : '' }} </p> 
  } @else if (showSecondWord){
    <!-- burada else if ve else de kullanabiliriz -->
  } @else {
    
  }

  @if (showSecondWord) {
    <p style="color: green;">İkinci yazı</p>
  } 

  <hr>
  <button (click)="show(1)">Birinci Yazıyı Göster</button>&nbsp;
  <button (click)="show(2)">İkinci Yazıyı Göster</button>
  `
})
export class AppComponent {
  showFirstWord: boolean = false;
  showSecondWord: boolean = false;

  // if bloğu
  show(num: number) {
    if (num === 1) {
      this.showFirstWord = true;
      this.showSecondWord = false;
    } else {
      this.showFirstWord = false;
      this.showSecondWord = true;
    }


    // switch bloğu
    switch(num) {
      case 1:
        this.showFirstWord = true;
        this.showSecondWord = false;
        break;
    
      case 2:
        this.showFirstWord = false;
        this.showSecondWord = true;
        break;
    }
  }

  
}
