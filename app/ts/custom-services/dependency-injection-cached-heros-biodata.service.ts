import {
    Injectable
} from '@angular/core';

import {
    DependencyInjectionHeroBiodataClass
} from './../custom-classes/dependency-injection-hero-biodata.class';

import {
    DependencyInjectionHerosBiodataService
} from './dependency-injection-heros-biodata.service';

import {} from '';

@Injectable()
export class DependencyInjectionCachedHerosBiodataService {

    /**
     *cachedHeroBioData: Varibale used to cached particular hero biodata.
     *
     **/
    public cachedHeroBioData: DependencyInjectionHeroBiodataClass;

    constructor(private DIHerosBiodata_S: DependencyInjectionHerosBiodataService) {

    }

    /**
     * getHeroBioData_DICHBS:getHeroBioData:DependencyInjectionCachedHeroBiodataService.
     *
     * This function is used to get hero detail object corresponding to provided hero id.
     *
     **/
    getHeroBioData_DICHBS(heroId: number): DependencyInjectionHeroBiodataClass {

        if (!this.cachedHeroBioData) {

            this.cachedHeroBioData = this.DIHerosBiodata_S.getHeroBiodataDatail_DIHBSM(heroId);
        }

        return this.cachedHeroBioData;
    }

}
