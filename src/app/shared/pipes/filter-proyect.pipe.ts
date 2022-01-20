import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProyect'
})
export class FilterProyectPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    return console.log('value pipe: ', value)
  }

}
