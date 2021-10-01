import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds'
})
export class SecondsPipe implements PipeTransform {

  transform(value: number, unit: string = ''): string {
    return `${value / 1000} ${unit}`;
  }

}
