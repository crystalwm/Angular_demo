import { Component } from '@angular/core';

import { Hero }    from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    //////// NOT SHOWN IN DOCS ////////

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form: any) {

        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    }

    /////////////////////////////

}