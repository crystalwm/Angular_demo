import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { HeroService }        from './heroes/hero.service';



@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HeroesComponent,
        HeroListComponent,
    ],
    bootstrap: [ HeroesComponent ]
})
export class AppModule { }
