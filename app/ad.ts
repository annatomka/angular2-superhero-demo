import {Component, View, Input} from 'angular2/angular2';
import {AdService} from './adservice';

@Component({
    selector: 'adsense-component',
    template : '<div><ins class="adsbygoogle" [attr.data-ad-client]="client" [attr.data-ad-slot]="slot" style="display:block;width: 100%;" data-ad-format="auto"></ins></div>'
})
export class AdsenseComponent {
    @Input() client: string;
    @Input() slot: string;
    tested : boolean;

    constructor() {
        if (!AdService.isLoaded)
        {
            var s = document.createElement('script');
            s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            document.body.appendChild(s);
            AdService.isLoaded = true;
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