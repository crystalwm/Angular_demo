import { Component } from '@angular/core';
import {Hero} from './hero';
import {heroService} from './hero.service';





@Component({
    selector: 'my-app',
    inputs:[],
    template: `
    <h2>My hero</h2>
    <li *ngFor="let hero of heroes" (click)="onSelected(hero)" [class.selected]="hero==selectedHero">
       <span>{{hero.id}}</span><span>{{hero.name}}</span>
     </li>
     <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles:[`
    .selected{
    background-color:burlywood;

    }
    li {
    /* display: none; */
    list-style-type: none;
    background-color: antiquewhite;
    padding: 5px;
    margin: 10px;
    display: block;
    width: 70px;
    border-radius: 5px;
    }

    `],
    providers:[heroService]
})
export class AppComponent {
    title = 'Tour of Heroes';
    heroes:Hero[];
    selectedHero:Hero;
    onSelected(hero:Hero):void{
        this.selectedHero=hero;
    }

    constructor(private heroService:heroService){

      /* this.heroService.getHeroes().then(heroes=>this.heroes=heroes);*/
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
    }
}

