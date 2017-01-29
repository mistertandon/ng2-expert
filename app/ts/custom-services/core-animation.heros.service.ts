import {
    Injectable
} from '@angular/core';

import {
    CoreAnimationHeroClass
} from './../custom-classes/core-animation.hero.class';

let ALL_HEROS: any[] = [
    'Parvesh',
    'Praveen',
    'Khuda Baksh',
    'Payal'
].map(heroName => new CoreAnimationHeroClass(heroName));

@Injectable()
export class CoreAnimationHerosService implements Iterable < CoreAnimationHeroClass > {

    public currentHeroes: CoreAnimationHeroClass[] = [];

    [Symbol.iterator]() {

        return this.currentHeroes.values();
    }

    /**
     * This function is used to add an hero object to currentHeroes variable.
     *
     */
    addActiveHero_CAHS(): void {

        let hero: CoreAnimationHeroClass;

        hero = ALL_HEROS[this.currentHeroes.length];
        hero.state = 'active';

        this.currentHeroes.push(hero);
    }

    /**
     * This function is used to determin, more heroes can be added if there are any
     * into <ALL_HEROS> array.
     *
     */
        canAdd(): boolean {

        return this.currentHeroes.length < ALL_HEROS.length;
    }
}
