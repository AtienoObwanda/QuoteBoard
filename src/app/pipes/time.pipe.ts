import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any): number {

    let currentDate = new Date();

 

    let difference = currentDate.getTime() - value.getTime();


    difference=difference /(24*60*60*1000);



    return Math.ceil(difference)-1;
  }

}
