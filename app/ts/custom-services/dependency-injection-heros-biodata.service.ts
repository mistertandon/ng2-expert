import {
    Injectable
} from '@angular/core';

import {
    DependencyInjectionHeroBiodataClass
} from './../custom-classes/dependency-injection-hero-biodata.class';

@Injectable()
export class DependencyInjectionHerosBiodataService {

    private herosBioDataArr: [DependencyInjectionHeroBiodataClass] = [

        new DependencyInjectionHeroBiodataClass(1, 'parvesh', '9650780712', 'Angular 2 Developer.'),
        new DependencyInjectionHeroBiodataClass(2, 'praveen', '8094663521', 'Node Js Developer.'),
        new DependencyInjectionHeroBiodataClass(3, 'khuda baksh', '9650780712', 'Laravel 5.3 Developer.')
    ];


    /**
     *	getAllHerosBioData_DIHBSM: getAllHerosBiodata: DependendcyInjectionHerosBiodataServiceMethod
     *	
     *	This function is used to get bio-data of all Heros.
     *
     *	@param: None
     *
     *	@return: An Array of DependencyInjectionHeroBiodataClass object's.
     *
     **/
    getAllHerosBioData_DIHBSM(): [DependencyInjectionHeroBiodataClass] {

        return this.herosBioDataArr;
    }
		
		/**
		 *
		 **/ 
    getHeroBiodataDatail_DIHBSM(HeroId: number): DependencyInjectionHeroBiodataClass {

        return this.herosBioDataArr.find(HeroObject =>
            HeroObject.id === HeroId
        );
    }

}
