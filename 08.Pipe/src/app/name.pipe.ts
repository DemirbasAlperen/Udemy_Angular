import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  // value: unknown -> işlemek istediğimiz değer girilir, ...args: unknown[] -> kısmına bir veya birden fazla parametre -> sondaki unknown kısmı ile bir çıktı elde ediyoruz.

  transform(value: string, ...args: unknown[]): string {
    return "Mr. " + value;    // bsy kelimesini ekledim ve yanına value değerini döndürdüm.
  }

}
