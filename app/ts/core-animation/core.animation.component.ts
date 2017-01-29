import {
    Component
} from '@angular/core';

import {
    CoreAnimationHerosService
} from './../custom-services/core-animation.heros.service';

@Component({
    templateUrl: "app/ts/core-animation/core.animation.component.html",
    styleUrls: ["app/ts/core-animation/core.animation.component.css"],
    providers: [CoreAnimationHerosService]
})
export class CoreAnimationComponent {

    public constructor(private ANIMATION_HEROS_S: CoreAnimationHerosService) {
				
				
    }
		

}
