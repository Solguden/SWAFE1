import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

@Pipe({
    name: 'customDate'
})

export class CustomDatePipe extends DatePipe implements PipeTransform {
        transform(value: any, arg1: any, arg2: any): any {
            if(arg1){
                var month = arg1
                var year = arg2
                // var expiration = month + "/" + year
                var newDate = new Date(year, month)
                // console.log(month, year, newDate)
                return super.transform(newDate, "MM/YY"); 
            }


        // return super.transform(value, "EEEE d MMMM y h:mm a");
    }
}



// export class CustomDatePipe extends 
// DatePipe implements PipeTransform {
// transform(value: any, args?: any): any {
// return super.transform(value, "EEEE d MMMM y h:mm a");
// }
// }