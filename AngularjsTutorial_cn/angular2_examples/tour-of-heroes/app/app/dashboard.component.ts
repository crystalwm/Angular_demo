import {Component} from '@angular/core';
import{Hero} from './Hero';
import{HeroService} from './hero.service';
import {OnInit} from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'my-dashbaord',
    templateUrl:'./dashboard.template.html'
})
export class DashboardComponent implements OnInit {
    heroes:Hero[]=[];
    ngOnInit(){
      this.HeroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
    }
    constructor(private HeroService:HeroService){}
}