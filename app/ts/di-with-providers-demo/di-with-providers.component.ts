import {
    Component,
    OnInit
} from '@angular/core';

import {
    LoggerService
} from './../custom-services/logger.service';

@Component({
    selector: "di-with-providers",
    templateUrl: "app/ts/di-with-providers-demo/di-with-providers.component.html",
    styleUrls: ["app/ts/di-with-providers-demo/di-with-providers.component.css"],
    providers: [LoggerService]
})
export class DiWithProvidersComponent implements OnInit {

    constructor(private Logger_Service_S: LoggerService) {}

    ngOnInit(): void {

        /**
         *Creating log message using LoggerService, helpfull to display messages in console while this component is created.
         **/
        this.Logger_Service_S.makeLog("DiWithProvidersComponent created.");
    }
}
