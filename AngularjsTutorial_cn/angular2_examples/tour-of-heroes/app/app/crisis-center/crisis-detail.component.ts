import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {CrisisService} from './crisis.service';
import {Crisis} from './crisis';
import {DialogService} from '../dialog.service';


@Component({
    template:`
      <div *ngIf="crisis">
         <h2>{{crisis.name}}</h2>
         <div><label>id:</label>{{crisis.id}}</div>
         <div>
            <label>name:</label>
            <input [(ngModel)]="editName" placeholder="name"/>
         </div>
         <button (click)="goBack()">Back</button>
      </div>
      <div>{{id}}</div>
    `
})
export class CrisisDetailComponent implements OnInit{
    crisis:Crisis;
    id:number;
    editName:string;
    ngOnInit(){
        this.route.params.forEach((params:Params)=>{
            let id=+params['id'];
            this.id=id;
            this.crisisService.getCrisis(id).then(crisis=>{
                this.crisis=crisis;
                this.editName=crisis.name;
            });
        });
    }

    constructor(
        private route:ActivatedRoute,
        private location:Location,
        private crisisService:CrisisService,
        public dialogService:DialogService
    ){}

    goBack(){
        this.location.back();
    }
    
}