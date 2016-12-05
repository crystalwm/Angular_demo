import {Component ,OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    template:`
        <h2>LOGIN</h2>
        <p>{{desp}}</p>
        <button (click)="changeState()">{{buttonState}}</button>
    `
})
export class LoginComponent implements OnInit{
    buttonState:string="Login";
    desp:string="Logged out";
    isLoggedIn:boolean;

    constructor(
       private authService:AuthService
    ){}

    ngOnInit(){
        this.isLoggedIn=this.authService.isLoggedIn;
    }


    changeState(){
        if(this.isLoggedIn){
            this.authService.logout();
            this.buttonState="Login";
            this.desp="Logged out"
            this.isLoggedIn=this.authService.isLoggedIn;
          }  
        else{
            var that:any=this;
            this.desp="Trying to log in ...";
            this.authService.login().subscribe(function(){
                that.buttonState="Logout";
                that.desp="Logged in";
            });
        }

    }
   
}