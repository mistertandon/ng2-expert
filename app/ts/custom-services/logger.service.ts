import {
    Injectable
} from '@angular/core';

@Injectable()
export class LoggerService {
		
		/**
		 *logsArr: Property used to store all the provided logged messaged for current request life cycle.
		 **/
    public logsArr: string[] = [];

    constructor() {}

    /**
     * makeLog: This function is used to create logs. Provided log message pushed into private property.
     *
     **/
    public makeLog(msgInfo: string, isError: Boolean = false): void {

        this.logsArr.push(msgInfo);
        this.showLog(msgInfo, isError);
    }

    /**
     *This function is used to display currently created log.
     *
     **/
    private showLog(msgInfo: string, isError: Boolean): void {

        isError ? console.error(msgInfo) : console.log(msgInfo);
    }

    /**
     *getLoggedMessages: It is a getter function, used to get all the logged messages for current request life cycle.
     *
     **/
    get getLoggedMessages() {

        let loggedMessage: string = JSON.stringify(this.logsArr);

        console.log(loggedMessage);

        return loggedMessage;
    }
}
