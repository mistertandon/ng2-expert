import {
    NgModule,
} from '@angular/core';

import {
    BrowserModule
} from '@angular/platform-browser';

import {
    CoreAnimationComponent
} from './core.animation.component';

import {
    HeroListBasicComponent
} from './hero-list-basic.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        CoreAnimationComponent,
        HeroListBasicComponent
    ]
})
export class CoreAnimationModule {}
