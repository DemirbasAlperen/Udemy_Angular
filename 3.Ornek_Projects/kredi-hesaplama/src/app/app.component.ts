import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
  <h1>Kredi Hesaplama</h1>
  <div>
    <label>Kredi Tutarı</label> &nbsp;
    <!-- input içine two data binding(FormsModule) için [(ngModel)] attribut ünü tanımladık. -->
    <input [(ngModel)]="krediTutari">
  </div>
  <br>
  <div>
    <label>Taksit Sayısı</label>&nbsp;
    <!-- select içine two data binding(FormsModule) için [(ngModel)] attribut ünü tanımladık. -->
    <select [(ngModel)]="taksitSayisi">
      <!-- taksitler değişkeni içine yazdığımız liste aşağıda tek tek döndürülecek -->
      @for(data of taksitler; track data){
        <!-- data yı option içerisine bind ettik -->
        <option>{{ data }}</option>
      }
    </select>
  </div>
  <br>
  <div>
    <!-- hesapla fonksiyonunu Hesapla butonuna entegre ettik -->
    <button (click)="hesapla()">Hesapla</button>
  </div>
  <hr>
  <!-- sonuçları h1 içine yazdırdık -->
  <h1>{{ result }}</h1>
  <br>
  <hr>
  <!-- aşağıya odemePlani nı göstermek için tablo ekledik -->
  <table border="1">
    <thead>
      <tr>
        <th>&nbsp;Taksit&nbsp;</th>
        <th>&nbsp;Taksit Tutarı&nbsp;</th>
        <th>&nbsp;Kalan Geri Ödeme&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      @for(data of odemePlani; track data){
        <tr>
          <!-- index + 1 yaparak taksit sıralamasını 1 den başlatabiliriz. -->
          <td>{{$index + 1}}</td>
          <td>{{data.taksitTutari}}</td>
          <td>{{data.kalanGeriOdeme}}</td>
        </tr>
      }
    </tbody>
  </table>
  `
})
export class AppComponent {
  // Kredi tutarını yakalamak için bir değişken yazdık
  krediTutari: number = 0;
  // seçilen taksit değerini(yukarıdaki listeden) yakalamak için de taksitSayisi isimli bir değişken oluşturuyoruz.
  taksitSayisi: number = 3;
  // taksitleri tutacağım numaratik liste değişkeni tanımladık
  taksitler: number[] = [3,6,12,24];

  // ekranda göstermek için result değişkeni tanımladık
  result: string = "";

  // odemePlani içine obje açıp iki tane değer tanımlıyoruz.
  odemePlani: {taksitTutari:number, kalanGeriOdeme:number}[] = [];
  
  hesapla() {
    // aşağıda 1.29 faiz oranını kullanarak taksit tutarını hesapladık
    const taksitTutari: number = (this.krediTutari / this.taksitSayisi) * 1.29
    // aşağıda geri ödenecek taplam tutarı yazdırdık
    let toplamGeriOdeme: number = taksitTutari * this.taksitSayisi;
    // ekranda görünecek olan tutarları result içine atadım. Ayrıca bu metot içindeki değişkeni kullanırken this kullanmadım.
    this.result = `Taksit Tutarı: ${taksitTutari} - Taksit Sayısı: ${this.taksitSayisi} - Toplam Geri Ödeme: ${toplamGeriOdeme}`

    // Ödeme planını hesapla tuşuna basınca göstermesini istiyoruz, o yüzden buraya tanımladık
    this.odemePlani = [];  // önce odemePlani nı sıfırladık
    for (let i = 0; i < this.taksitSayisi; i++) {
      toplamGeriOdeme -= taksitTutari    // her defasında toplamGeriOdeme güncellenecek
      const data = {
        taksitTutari: taksitTutari,
        kalanGeriOdeme: toplamGeriOdeme
      }

      this.odemePlani.push(data);
    }

  }






}
