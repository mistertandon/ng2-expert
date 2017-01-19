import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    BrowserModule
} from '@angular/platform-browser';

import {
    DiComponent
} from './di.component';

import {
    DiHerosBiosAndContactsComponent
} from './di.heros-bios-and-contacts.component';

import {
    DiHeroBiodataComponent
} from './di.hero-bio.component';

import {
    DiHeroContactComponent
} from './di.hero-contact.component';

import {
    DependencyInjectionHighlightDirective
} from './../custom-directives/di.highlight-directive';

@NgModule({
    imports: [CommonModule, BrowserModule],
    declarations: [
        DiComponent,
        DiHerosBiosAndContactsComponent,
        DiHeroBiodataComponent,
        DiHeroContactComponent,
        DependencyInjectionHighlightDirective
    ]
})
export class DiModule {}
