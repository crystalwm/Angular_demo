import {Injectable} from '@angular/core';
import {
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
        } from '@angular/router';
import {CrisisDetailComponent} from './crisis-detail.component';

@Injectable()
export class CanDeactivateGuardCrisisDetailService implements CanDeactivate<CrisisDetailComponent>{
    canDeactivate(
        component:CrisisDetailComponent,
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):boolean | Promise<boolean>{

        console.log(route.params['id']);
        console.log(state.url);
        
        //if the input has no change
        if(!component.crisis || component.crisis.name==component.editName){
            return true;
        }
        return component.dialogService.confirm("Discard changes?");
    }

}