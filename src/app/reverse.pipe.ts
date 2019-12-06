import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let reverse:string="";
    if (value!='') {
      for(let i = value.length - 1; i >= 0; i--)
      {
          reverse = reverse + value.charAt(i);
      }
      return reverse;
    }
  }

}
