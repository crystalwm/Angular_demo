\

import {Component ,Input} from '@angular/core';
import {Hero} from './hero';

@Component({
    selector:'my-hero-detail',
    template:`
      <div *ngIf="hero">
     <label for="hero" >selected hero:</label>
     <input type="text" id="selectedHero" [(ngModel)]="hero&&hero.name"  name="hero"/>
     </div>
    `
})
export class heroDetailComponent{
    @Input()
    hero:Hero;

}
