import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import {
    CoreAnimationHerosService
} from './../custom-services/core-animation.heros.service';

@Component({
    selector: "hero-list-basic",
    templateUrl: "app/ts/core-animation/hero-list-basic.component.html",
    styleUrls: ["app/ts/core-animation/hero-list-basic.component.css"],
    animations: [trigger('herostate', [
            state('active', style({
                backgroundColor: "#99B3FF",
                color: "#330000"
            })),
            state('inactive', style({
                backgroundColor: "#FFCC66",
                color: "#001A80"
            })),
            transition('active => inactive', animate('100ms ease-in')),
            transition('inactive => active', animate('100ms ease-in'))
        ]

    )]
})
export class HeroListBasicComponent {

    @Input()
    public heroes: CoreAnimationHerosService;

}
