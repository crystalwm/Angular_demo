import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(
        private router:Router,
        private authService:AuthService
    ){}

    checkLogin(url:string):boolean{
        if(this.authService.isLoggedIn){
            return true;
        }
        this.authService.redirectUrl=url;
        this.router.navigate['/login'];
        return false;
    }
    canActivate():boolean{
        console.log("enter canActivate ");
        return true;
    }
}