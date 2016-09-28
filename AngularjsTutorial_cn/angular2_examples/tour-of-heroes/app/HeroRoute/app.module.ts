import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeroesComponent } from './heroes.component';

import { HeroService } from './hero.service';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations:[
        AppComponent,
        HeroesComponent
    ],
    providers:[
        HeroService
    ],
    bootstrap:[AppComponent]
})

export class AppModule{

}