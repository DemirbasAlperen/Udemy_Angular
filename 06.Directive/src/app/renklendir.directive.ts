import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
  standalone: true
})
export class RenklendirDirective {

  // test attribut ünü yakalama
  // @Input("test") name: string | undefined;

  // renklendir attributü içine yazılan green parametresini yakalamak için;
  // @Input("renklendir") color: string | undefined;

  constructor(  // renklendirme yapmak için buraya servis yazıyoruz.
    private el: ElementRef   // ElementRef tipindeki el değişkenini tanımladık.
  ) { }

  @HostListener("mouseenter") method1(){
    // console.log(this.color);
    // console.log(this.name);

    this.el.nativeElement.style = "color: red";    // üzerine gelince kırmızı
    // this.el.nativeElement.innerHTML = this.name;   // üzerine gelince element ismini değişmesi
    // console.log("Mouse elementin üzerine geldi");
  }

  @HostListener("mouseleave") method2(){
    this.el.nativeElement.style = "color: black";   // üzerinden ayrılınca siyah
    // console.log("Mouse elementin üzerinden ayrıldı");
  }

}
