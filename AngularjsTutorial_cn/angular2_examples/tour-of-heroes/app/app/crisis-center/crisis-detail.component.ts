import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {CrisisService} from './crisis.service';
import {Crisis} from './crisis';


@Component({
    template:`
      <div *ngIf="crisis">
         <h2>{{crisis.name}}</h2>
         <div><label>id:</label>{{crisis.id}}</div>
         <div>
            <label>name:</label>
            <input [(ngModel)]="crisis.name" placeholder="name"/>
         </div>
         <button (click)="goBack()">Back</button>
      </div>
      <div>{{id}}</div>
    `
})
export class CrisisDetailComponent implements OnInit{
    crisis:Crisis;
    id:number;
    ngOnInit(){
        this.route.params.forEach((params:Params)=>{
            let id=+params['id'];
            this.id=id;
            this.crisisService.getCrisis(id).then(crisis=>this.crisis=crisis);
        });
    }

    constructor(
        private route:ActivatedRoute,
        private location:Location,
        private crisisService:CrisisService
    ){}

    goBack(){
        this.location.back();
    }
    
}