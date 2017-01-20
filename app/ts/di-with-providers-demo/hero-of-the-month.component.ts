import {
    Component,
    Inject,
    OnInit
} from '@angular/core';

import {
    DependencyInjectionHeroBiodataClass
} from './../custom-classes/dependency-injection-hero-biodata.class';

import {
    DependencyInjectionHerosBiodataService
} from './../custom-services/dependency-injection-heros-biodata.service';

import {
    LoggerService
} from './../custom-services/logger.service';

import {
    DateLoggerService
} from './../custom-services/date-logger.service';

import {
    RUNNERS_UP_HEROS,
    runnersUpHeros
} from './../custom-fatories/runners-up-heros.factory';

const winnerHero: DependencyInjectionHeroBiodataClass = new DependencyInjectionHeroBiodataClass(1, 'parvesh', '9650780712', 'Angular 2 Developer.');

@Component({
    selector: "hero-of-the-month",
    templateUrl: "app/ts/di-with-providers-demo/hero-of-the-month.component.html",
    styleUrls: ["app/ts/di-with-providers-demo/hero-of-the-month.component.css"],
    providers: [{
        provide: DependencyInjectionHeroBiodataClass,
        useValue: winnerHero
    }, {
        provide: DependencyInjectionHerosBiodataService,
        useClass: DependencyInjectionHerosBiodataService
    }, {
        provide: LoggerService,
        useClass: DateLoggerService
    }, {
        provide: RUNNERS_UP_HEROS,
        useFactory: runnersUpHeros(2),
        deps: [DependencyInjectionHeroBiodataClass, DependencyInjectionHerosBiodataService]
    }]
})
export class HeroOfTheMonthComponent implements OnInit {

    constructor(

        private Logger_S: LoggerService,
        @Inject(DependencyInjectionHeroBiodataClass) public winnerHeroObject: DependencyInjectionHeroBiodataClass,
        @Inject(RUNNERS_UP_HEROS) public runnersUpHeros: string

    ) {

    }

    ngOnInit(): void {

        this.Logger_S.makeLog('HeroOfTheMonthComponent is created at :');
    }

    get loggedMessaged_HOTDCP() {

        return this.Logger_S.getLoggedMessages;
    }








}
