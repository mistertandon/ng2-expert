import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

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

@NgModule({
    imports: [CommonModule],
    declarations: [
        DiComponent,
        DiHerosBiosAndContactsComponent,
        DiHeroBiodataComponent,
        DiHeroContactComponent
    ]
})
export class DiModule {}
