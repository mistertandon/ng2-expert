import {
    NgModule
} from '@angular/core';

import {
    RouterModule,
    Routes
} from '@angular/router';

import {
    HerosMasterComponent
} from './heros-master.component';

import {
    HeroDetailComponent
} from './hero-detail.component';

import {
    DashboardComponent
} from './dashboard.component';

import {
    HeroFormComponent
} from './hero-form.component';

import {
    HeroFormReactiveComponent
} from './hero-form-reactive/hero-form-reactive.component';

import {
    DynamicHeroFormComponent
} from './dynamic-hero-form/dynamic-hero-form.component';

import {
    HighlightDirectiveComponent
} from './highlight-directive-demo/highlight-directive.component';

import {
    DiComponent
} from './dependency-injection-demo/di.component';

const ROUTES_CONF: Routes = [{
    path: 'heros',
    component: HerosMasterComponent
}, {
    path: 'dashboardheroes',
    component: DashboardComponent
}, {
    path: 'herodetail/:id',
    component: HeroDetailComponent
}, {
    path: 'addhero',
    component: HeroFormComponent
}, {
    path: 'addheroreactive',
    component: HeroFormReactiveComponent
}, {
    path: 'addherodynamic',
    component: DynamicHeroFormComponent
}, {
    path: 'highlightdirective',
    component: HighlightDirectiveComponent
}, {
    path: 'diherosdetail',
    component: DiComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES_CONF)],
    exports: [RouterModule]

})
export class AppRoutingModule {}
