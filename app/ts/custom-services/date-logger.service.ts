import {
    Injectable
} from '@angular/core';

import {
    LoggerService
} from './logger.service';

import {
    MinimalLoggerAbstractClass
} from './../custom-abstract-classes/minimal-logger.abstract.class';

import {
    appendDateToMessage_I
} from './../custom-interfaces/logger.interface';

/**
 *appendDateToMessage: This function is used to append date to provided message.
 *
 **/
let appendDateToMessage: appendDateToMessage_I = function(messageInfo: string): string {

    return `messageInfo at ${new Date()}`;
}

@Injectable()
export class DateLoggerService extends LoggerService implements MinimalLoggerAbstractClass {

    constructor() {

        super();
    }

    public makeLog(messageInfo: string): void {

        super.makeLog(appendDateToMessage(messageInfo));
    }
}
