import {Component, View, Input} from 'angular2/angular2';
import {PromoterService} from './promoter.service';

@Component({
    selector: 'promoter-component',
    template : '<div><ins class="adsbygoogle" [attr.data-ad-client]="client" [attr.data-ad-slot]="slot" style="display:block;width: 100%;" data-ad-format="auto"></ins></div>'
})
export class PromoterComponent {
    @Input() client: string;
    @Input() slot: string;
    tested : boolean;

    constructor() {
        if (!PromoterService.isLoaded)
        {
            var s = document.createElement('script');
            s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            document.body.appendChild(s);
            PromoterService.isLoaded = true;
        }

        try{
            if (!window.adsbygoogle) {
                window.adsbygoogle = [];
            }
            window.adsbygoogle.push({});
        }catch(e){
            console.error(e); //TODO:
        }
    }
}