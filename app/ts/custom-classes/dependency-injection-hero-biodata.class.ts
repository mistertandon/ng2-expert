import {
    DependencyInjectionHeroBiodataInterface
} from './dependency-injection-hero-biodata.interface';

export class DependencyInjectionHeroBiodataClass implements DependencyInjectionHeroBiodataInterface {

    public id: number;

    public name: string;

    public phoneNumber: string;

    public description: string;

    constructor(id: number, name: string, phoneNumber ? : string, description ? : string) {

        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber || 'xxxxxxxxxx';
        this.description = description || 'No Description Available.';
    }

}
