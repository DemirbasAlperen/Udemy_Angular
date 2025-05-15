import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {

  // value: unknown -> işlemek istediğimiz değer girilir, ...args: unknown[] -> kısmına bir veya birden fazla parametre -> sondaki unknown kısmı ile bir çıktı elde ediyoruz.

  transform(value: string[], search: string): string[] {      
    if(!search) return value;   // search da değer yoksa

    return value.filter(p=> p.includes(search));    // search da değer varsa value yi işleyebiliyoruz.
  }

}
