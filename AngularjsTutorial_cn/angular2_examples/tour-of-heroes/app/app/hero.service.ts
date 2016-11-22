import { Injectable } from '@angular/core';

import { Hero } from './hero';
import {Heroes} from './mock-heroes';


@Injectable()
export class HeroService {
    getHeroes():Promise<Hero[]>{
        return Promise.resolve(Heroes);
    }

    getHero(id:number):Promise<Hero>{
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id==id));
    }

}


