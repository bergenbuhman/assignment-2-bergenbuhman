import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date, format: string = 'MMM d, y'): string {
    if (!(value instanceof Date)) {
      return '';
    }
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(
      value
    );
  }
}
