import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroModule}  from './hero/hero.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {AdminModule} from './admin/admin.module';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';



@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HeroModule,
        CrisisCenterModule,
        AdminModule,
        AppRoutingModule
        ],
    declarations: [ 
        AppComponent,
        ],
    providers:[
        AuthGuardService,
        AuthService
        ],
    bootstrap:[ AppComponent ]
})
export class AppModule { }
