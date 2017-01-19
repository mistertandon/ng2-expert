import {
    Component,
    Input,
    OnInit
} from '@angular/core';

import {
    DependencyInjectionHeroBiodataClass
} from './../custom-classes/dependency-injection-hero-biodata.class';

import {
    DependencyInjectionHerosBiodataService
} from './../custom-services/dependency-injection-heros-biodata.service';

@Component({

    selector: "di-heros-bios-and-contacts",
    templateUrl: "app/ts/dependency-injection-demo/di.heros-bios-and-contacts.component.html",
    styleUrls: ["app/ts/dependency-injection-demo/di.heros-bios-and-contacts.component.css"]

})
export class DiHerosBiosAndContactsComponent implements OnInit {

    /**
     *herosInfoArray: An Array of heros, containg DependencyInjectionHeroBiodataClass type element as Array value.
     **/
    public herosInfoArray: [DependencyInjectionHeroBiodataClass];

    constructor(private DIHerosBiodata_S: DependencyInjectionHerosBiodataService) {}

    ngOnInit(): void {

        this.herosInfoArray = this.DIHerosBiodata_S.getAllHerosBioData_DIHBSM();
    }
}
