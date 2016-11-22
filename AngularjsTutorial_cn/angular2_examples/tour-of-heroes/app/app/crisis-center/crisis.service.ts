import {Injectable} from '@angular/core';

import {crisises} from './mock-Crisises';
import {Crisis} from './crisis';

@Injectable()
export class CrisisService{
    static nextCrisisId = 100;
    getCrisis(id:number){
        this.getCrisises().then(crisises=>crisises.find(crisis=>crisis.id==id));
    }
    getCrisises():Promise<Crisis[]>{
        return Promise.resolve(crisises);  
    }

    addCrisis(name:string){
        let crisis={
            id:CrisisService.nextCrisisId++,
            name:name
        }
        this.getCrisises().then(crisises=>crisises.push(crisis));

    }

}