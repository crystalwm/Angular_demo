import {Injectable} from '@angular/core';
import {CanActivate,
        CanActivateChild,
        ActivatedRouteSnapshot,
        RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild{
    constructor(
        private router:Router,
        private authService:AuthService
    ){}

    checkLogin(url:string):boolean{
        if(this.authService.isLoggedIn){
            return true;
        }
        this.authService.redirectUrl=url;
        this.router.navigate(['/login']);
        return false;
    }
    canActivate(
        futureRoute:ActivatedRouteSnapshot,
        futureRouteState:RouterStateSnapshot
    ):boolean{
        let url=futureRouteState.url;
        return this.checkLogin(url);
    }

    canActivateChild(
        futureRoute:ActivatedRouteSnapshot,
        futureRouteState:RouterStateSnapshot
    ):boolean{
        return  this.canActivate(futureRoute,futureRouteState);
    }
}