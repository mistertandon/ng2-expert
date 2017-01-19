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

@NgModule({
    imports: [CommonModule],
    declarations: [DiComponent, DiHerosBiosAndContactsComponent, DiHeroBiodataComponent]
})
export class DiModule {}
