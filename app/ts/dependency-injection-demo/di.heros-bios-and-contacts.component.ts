import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({

    selector: "di-heros-bios-and-contacts",
    templateUrl: "app/ts/dependency-injection-demo/di.heros-bios-and-contacts.component.html",
    styleUrls: ["app/ts/dependency-injection-demo/di.heros-bios-and-contacts.component.css"]

})
export class DiHerosBiosAndContactsComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {

    }
}
