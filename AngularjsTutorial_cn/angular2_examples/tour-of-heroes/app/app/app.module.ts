import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroModule}  from './hero/hero.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {AdminModule} from './admin/admin.module';
import {LoginModule} from './login/login.module';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';
import {CanDeactivateGuardService} from './can-deactive-guard.service';
import {DialogService} from './dialog.service';



@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HeroModule,
        CrisisCenterModule,
        AdminModule,
        LoginModule,
        AppRoutingModule
        ],
    declarations: [ 
        AppComponent,
        ],
    providers:[
        AuthGuardService,
        AuthService,
        CanDeactivateGuardService,
        DialogService
        ],
    bootstrap:[ AppComponent ]
})
export class AppModule { }
