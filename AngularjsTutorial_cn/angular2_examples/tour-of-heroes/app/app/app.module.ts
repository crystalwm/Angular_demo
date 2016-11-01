import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}  from '@angular/forms';
import { AppComponent }  from './app.component';
import { heroDetailComponent} from './hero-detail.component';
@NgModule({
    imports: [
        BrowserModule ,
        FormsModule
        ],
    declarations: [ AppComponent ,heroDetailComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
