import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
  <h1>Todo App</h1>
  @if(!isUpdateWorkFormActive) {
    <!-- eğer isUpdateWorkFormActive aktif değilse bu kısım görünecek, -->
    <div>
      <label>Work &nbsp;</label>
      <!-- input içine two data binding(FormsModule) için [(ngModel)] attribut ünü tanımladık. -->
      <input [(ngModel)]="work">
      <!-- button içine save metodunu kullanmak için click event ini ekledik. -->
      &nbsp; <button (click)="save()">Save</button>
  </div>
  }@else {
    <!-- aktifse bu kısım görünecek -->
    <div>
      <label>UpdateWork &nbsp;</label>
      <input [(ngModel)]="updateWork">
      &nbsp; <button (click)="update()">Update</button>
  </div>
  }

  <hr>
  <div>
    <ul>
      <!-- listeyi gösterebilmek için for kullandık -->
      @for(data of todos; track data){
        <!-- data yı li içerisine bind ettik -->
        <li>
          {{ data }}
          <!-- Update e basınca get metoduna index i yollar. Get metodundaki kod index deki kaydı bulur ve updateWork metoduna set eder -->
          @if(!isUpdateWorkFormActive){
            <!-- isUpdateWorkFormActive metodu aktif değilse iki buton görünür -->
            <button (click)="get($index)" style="position: absolute; right: 1260px;">Update</button>
            <button (click)="delete($index)" style="position: absolute; right: 1200px;">Delete</button>
          }
        </li>
        <br>
      }
    </ul>
  </div>
   
  `
})
export class AppComponent {
  work: string = "";
  updateWork: string = "";
  updateIndex: number = 0;
  todos: string[] = [];
  isUpdateWorkFormActive: boolean = false;


  save() {
    this.todos.push(this.work);
    // aşağıda ekleme işleminden sonra work içini boşalt dedik.
    this.work = "";
  }


  delete(index: number) {
    this.todos.splice(index, 1);
  }


  get(index: number) {
    // buraya index i tanımlayarak hangi index i güncelleyeceğimizi takip edebiliriz. O yüzden yukarıda bu değişkeni tanımladık
    this.updateIndex = index;
    // updateWork deki index e ait kaydı bul
    this.updateWork = this.todos[index]
    this.isUpdateWorkFormActive = true;
  }

  update() {
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateWorkFormActive = false;
  }
}
