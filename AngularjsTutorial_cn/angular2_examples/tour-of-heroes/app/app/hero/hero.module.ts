import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';

import { HeroComponent }  from './hero.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './heroDetail.component';
import {HeroRoutingModule} from './hero-routing.module';

import {HeroService} from './hero.service';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HeroRoutingModule
        ],
    declarations: [ 
        HeroComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent
        ],
    providers:[
        HeroService
        ],
    bootstrap:[ HeroComponent ]
})
export class HeroModule { }
