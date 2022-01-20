import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProyect'
})
export class FilterProyectPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const result: any[] = []
    for(let item of value){
      if(item === args){
          result.push(item)
        }
    }
    return result
  }

}
