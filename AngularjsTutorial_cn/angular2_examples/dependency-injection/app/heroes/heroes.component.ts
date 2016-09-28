import { Component }          from '@angular/core';

import { HeroService }        from './hero.service';

@Component({
    selector: 'my-heroes',
    template: `
  <h2>Heroes</h2>
  <hero-list></hero-list>
  `,
    providers:[HeroService],
})
export class HeroesComponent { }
