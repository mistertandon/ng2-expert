import {
    BrowserModule
} from '@angular/platform-browser';

import {
    NgModule
} from '@angular/core';

import {
    HighLightDirective
} from './../custom-directives/highlight-directive';

import {
    HighlightDirectiveComponent
} from './highlight-directive.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [HighLightDirective, HighlightDirectiveComponent]
})
export class HighlightDirectiveModule {}
