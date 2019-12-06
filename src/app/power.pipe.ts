import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
 
  transform(value: any,param:any): any {
    if(value!='') {
      value = Math.pow(value,param);
      return value;
    }
  }
}
