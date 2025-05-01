import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validate]'
})
export class ValidateDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener("keyup") keyupMethod(){
    this.checkInputValidation(this.el.nativeElement)   // checkInputValidation elementine el elementini yolladık
  }

  // yukarıdaki tanımlamalardan sonra artık target olmaz doğrudan element yazılır.
  checkInputValidation(element: any){
    // console.log(event.target.validity.valid);

    // valid değerini(true & false) daha kolay yönetmek için bir değişkene aldım
    const valid = element.validity.valid
    const id = element.id;    // input içindeki id ye erişim
    const divEl = document.querySelector(`#${id} + div`)     // burada input un bitişiğinde bulunan div e erişim sağladık
    if(!valid) {  // validasyon kuralları geçerli değilse
      element.className = "invalid"    // invalid durumunda css de rengi kırmızı olsun diyebiliriz.
      divEl!.innerHTML = element.validationMessage    // div e eriştik ve validasyon kuralları geçerli olmayınca mesaj döndürmesini sağladık
    }else {       // validasyon kuralları geçerli ise
      element.className = ""
      divEl!.innerHTML = ""       // div e eriştik ve validasyon kuralları geçerli olunca mesajın boş dönmesini istedik
    }

  }

}
