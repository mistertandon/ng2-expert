import {
    DependencyInjectionHeroBiodataClass
} from './../custom-classes/dependency-injection-hero-biodata.class';

import {
    DependencyInjectionHerosBiodataService
} from './../custom-services/dependency-injection-heros-biodata.service';

import {
    OpaqueToken
} from '@angular/core';

export const RUNNERS_UP_HEROS = new OpaqueToken("runnersUpHeros");

export function runnersUpHeros(numberOfHeros: number) {

    return (WinnerHero: DependencyInjectionHeroBiodataClass, HERO_BIO_DATA_S: DependencyInjectionHerosBiodataService): string => {
				
				/**
				 *runnersUpHeroObjectIW: Runners up heros object including winner.
				 *runnersUpHeroObjectEW: Runners up heros object Excluding winner.
				 **/
        return HERO_BIO_DATA_S.getAllHerosBioData_DIHBSM()
								.filter(runnersUpHeroObjectIW => runnersUpHeroObjectIW.name !== WinnerHero.name)
								.map(runnersUpHeroObjectEW => runnersUpHeroObjectEW.name)
								.slice(0, 2)
								.join(', ');

    }

}
