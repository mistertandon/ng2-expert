import {
    Component,
    Host
} from '@angular/core';

import {
    DependencyInjectionCachedHerosBiodataService
} from './../custom-services/dependency-injection-cached-heros-biodata.service';

@Component({
    selector: "di-hero-contact",
    templateUrl: "app/ts/dependency-injection-demo/di.hero-contact.component.html",
    styleUrls: ["app/ts/dependency-injection-demo/di.hero-contact.component.css"],

})
export class DiHeroContactComponent {

    constructor(
        @Host() private DICachedHerosBiodata_S: DependencyInjectionCachedHerosBiodataService
    ) {}

    get heroContactInfo(): string {

        return this.DICachedHerosBiodata_S.cachedHeroBioData.phoneNumber;
    }
}
