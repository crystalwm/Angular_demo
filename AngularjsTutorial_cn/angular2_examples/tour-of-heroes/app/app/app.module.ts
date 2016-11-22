import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroModule}  from './hero/hero.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';



@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HeroModule,
        CrisisCenterModule,
        AppRoutingModule
        ],
    declarations: [ 
        AppComponent,
        ],
    bootstrap:[ AppComponent ]
})
export class AppModule { }
