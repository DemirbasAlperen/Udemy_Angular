import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
  <h1>Döngüler</h1>
  <ul>
    <!-- Eski Yöntem: Angular 16 ve eski versiyonlarda aşağıdaki yöntem kullanılırdı. -->
    <!-- <li *ngFor="let data of todos">{{ data }}</li> -->

    <!-- Yeni Yöntem: Angular 17 ve sonrası için geçerli olan for döngüsü aşağıdaki gibidir  -->
    <!-- track; Eğer yeni bir veri girişi yapılırsa (tüm sayfayı)sayfayı yeniden render etme sadece yeni girilen veriyi ekle -->
    <!-- Buradaki döngü html tarafında döngü yönetme yöntemidir -->
    @for(data of todos; track data){
      <li>İndex: {{$index}} || İlk Kayıt mı?: {{$first}} || Son Kayıt mı?: {{$last}} || Veri: {{data.work}}</li>
      <!-- {{$index}}; index e erişmek istersek bu şekilde yazarız -->
      <!-- {{$first}}; ilk kayda erişmek istersek bu şekilde yazarız. true yada false -->
      <!-- {{$last}}; son kayda erişmek istersek bu şekilde yazarız. true yada false -->
    } 
  </ul>
  `
})
export class AppComponent {
  // Eğer verimiz tek bir tip değilse yani obje ise yukarıda Veri kısmında şu şekilde tanımlarız; {{data.work}} ya da {{data.isComplated}} 
  todos: TodoModel[] = [
    {work:"Example 1", isComplated: true},
    {work:"Example 2", isComplated: true},
    {work:"Example 3", isComplated: true},
  ]

  // save metodunu etkinleştirmek için ctor tanımladık
  constructor() {
    this.save();
  }

  // Eğer Ts tarafında döngü yönetme yöntemi yaparsam onuda burada şu şekilde yaparız:
  save() {
    console.log("------------------------ For Döngüsü -------------------------");

    // for ile rastgele döngü oluşturma
    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    console.log("----------------------- Listeyi for ile dönme --------------------------");

    // for ile var olan listeyi döndürme
    for (let i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].work);  // todos un i. kaydına gidip work değerini ekrana yazdırabilirim
    }

    console.log("------------------------ Listeyi foreach ile dönme -------------------------");

    // listeyi döndürmenin yöntemlerinden bir tanesi de listeyi çağırıp foreach kullanmak
    this.todos.forEach((val) => {
      console.log(val.work);
      console.log(val.isComplated);
    })

    console.log("---------------------- Listeyi for of ile dönme ---------------------------");

    // for u farklı bir şekilde kullanarak da listeyi döndürebiliriz. Buradaki of asenkron yapıları destekler yani istersek asenkron kodlar da yazabiliriz. 
    for (let data of this.todos) {  // of -> data(veri) alır
      console.log(data.work);
      console.log(data.isComplated);
    }

    console.log("----------------------Listeyi for in ile dönme---------------------------");

    // for döngüsünün bir de in özelliği bulunur bu da listemizin index ini alır. in -> index alır
    for (let index in this.todos) {
      console.log(index);
    }
     
  }
}

// aşağıdaki gibi obje için class oluşturabiliyoruz. Hatta buradaki class ı app dosyası içinde herhangi biryerde(Models klasörü) de tanımlayabiliriz.  Ayrıca bunu yukarıdaki todos içine tanımlayabiliyoruz. work: string, isComplated: boolean yerine TodoModel yazdık.
export class TodoModel {
  work: string = "";
  isComplated: boolean = false;
}
