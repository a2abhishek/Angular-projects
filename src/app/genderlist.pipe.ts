import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderlist'
})
export class GenderlistPipe implements PipeTransform {
  transform(value: any, param: string): any {
    let listValue:any = [];

    value.forEach(item => {
      if(item.gender.toLowerCase()==param.toLowerCase()){
        listValue.push(item);
      }
    });
    return listValue;
    
  }

}
