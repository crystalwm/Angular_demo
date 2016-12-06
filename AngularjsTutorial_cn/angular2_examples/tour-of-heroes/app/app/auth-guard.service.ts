import {Injectable} from '@angular/core';
import {CanActivate,
        CanActivateChild,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        NavigationExtras,
        CanLoad,Route
        } from '@angular/router';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild,CanLoad{
    constructor(
        private router:Router,
        private authService:AuthService
    ){}

    checkLogin(url:string):boolean{
        if(this.authService.isLoggedIn){
            return true;
        }
        this.authService.redirectUrl=url;
       
        let navigationExtras:NavigationExtras={
            queryParams:{sessionId:'ddd'},
            fragment:'anchor'
        }
        this.router.navigate(['/login'],navigationExtras);
        return false;
    }
    canActivate(
        futureRoute:ActivatedRouteSnapshot,
        futureRouteState:RouterStateSnapshot
    ):boolean{
        let url=futureRouteState.url;
        return this.checkLogin(url);
    }

    canLoad(
        route:Route
    ):boolean{
        console.log("enter canLoad");
        let url=`/${route.path}`;
        return this.checkLogin(url);
    }

    canActivateChild(
        futureRoute:ActivatedRouteSnapshot,
        futureRouteState:RouterStateSnapshot
    ):boolean{
        return  this.canActivate(futureRoute,futureRouteState);
    }
}