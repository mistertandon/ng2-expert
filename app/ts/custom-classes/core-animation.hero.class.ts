export class CoreAnimationHeroClass {

    public constructor(public name: string, public state: string = 'inactive') {}

    public stateToggle() {

        this.state = (this.state === 'active') ? 'inactive' : 'active';
    }
}
