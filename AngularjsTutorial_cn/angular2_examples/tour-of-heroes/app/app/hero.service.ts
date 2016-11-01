import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {heroes} from './mock-heroes';

@Injectable()
export class heroService{

    getHeroes():Promise<Hero[]>{

    return Promise.resolve(heroes);
}

}
