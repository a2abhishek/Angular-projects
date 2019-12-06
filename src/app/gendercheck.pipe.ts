import { Pipe, PipeTransform } from '@angular/core';
import { makeRe } from 'minimatch';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'gendercheck'
})
export class GendercheckPipe implements PipeTransform {

  transform(value:string, param:string): string {
    if(param.toLowerCase()=='male') {
      return "Mr. "+value;
    }
    else return "Miss. "+value;
  }
}
