import {
    Component,
    Input
} from '@angular/core';

import {
    DependencyInjectionHeroBiodataClass
} from './../custom-classes/dependency-injection-hero-biodata.class';

import {
    DependencyInjectionCachedHerosBiodataService
} from './../custom-services/dependency-injection-cached-heros-biodata.service';

@Component({

    selector: "di-hero-bio",
    templateUrl: "app/ts/dependency-injection-demo/di.hero-bio.component.html",
    styleUrls: ["app/ts/dependency-injection-demo/di.hero-bio.component.css"],
    providers: [DependencyInjectionCachedHerosBiodataService]

})
export class DiHeroBiodataComponent {

    /**
     * heroID_DIHBCP: heroId: DiHeroBiodataComponent
     *
     **/
    @Input()
    public heroID_DIHBCP: number;

    public heroBioData: DependencyInjectionHeroBiodataClass;

    constructor(private DICachedHerosBiodata_S: DependencyInjectionCachedHerosBiodataService) {

    }

    ngOnInit(): void {

        this.heroBioData = this.getCachedHeroBioData_DIHBCM();
    }

    getCachedHeroBioData_DIHBCM(): DependencyInjectionHeroBiodataClass {

        return this.DICachedHerosBiodata_S.getHeroBioData_DICHBS(this.heroID_DIHBCP);
    }


}
