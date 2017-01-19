import {
    Component
} from '@angular/core';

import {
    DependencyInjectionHerosBiodataService
} from './../custom-services/dependency-injection-heros-biodata.service';

@Component({
    selector: "di-component",
    templateUrl: "app/ts/dependency-injection-demo/di.component.html",
    styleUrls: ["app/ts/dependency-injection-demo/di.component.css"],
    providers: [DependencyInjectionHerosBiodataService]
})
export class DiComponent {}
