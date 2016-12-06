import {Injectable} from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    Router
       } from '@angular/router';
import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';

@Injectable()
export class CrisisDetailResolveService implements Resolve<Crisis>{
    constructor(
        private router:Router,
        private cs:CrisisService

    ){}

    resolve(
        route:ActivatedRouteSnapshot
    ):Promise<Crisis>| boolean{
        let id=route.params['id'];
        return  this.cs.getCrisis(id).then(crisis=>{
                    if(crisis){
                        return crisis;
                    }
                    else{
                        this.router.navigate(['/crisis-center']);
                        return false;
                    }
                });
    }

}

