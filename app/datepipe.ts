import {Pipe} from 'angular2/angular2';

@Pipe({
    name: 'dateformat'
})
export class DateFormatPipe {
    transform(value:Date, args:string[]) : any {
        return moment(value).fromNow();
    }
}