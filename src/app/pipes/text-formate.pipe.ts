import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormate'
})
export class TextFormatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
