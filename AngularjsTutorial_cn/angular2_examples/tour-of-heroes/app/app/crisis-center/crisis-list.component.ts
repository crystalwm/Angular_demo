import {Component,OnInit} from '@angular/core';
import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
    template:`
       <ul  *ngIf="crisises.length>0">   
          <li *ngFor="let crisis of crisises" (click)="onSelect(crisis)">
            <span>{{crisis.id}}</span>{{crisis.name}}
          </li>
       </ul>        
        <router-outlet></router-outlet>
    `,
    styles:[`
        li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
            list-style-type: none;
            width: 15em;
        }
    `]
})
export class CrisisListComponent implements OnInit{
    crisises:Crisis[]=[];
    selectedCrisis:Crisis;
    
    ngOnInit(){
        this.crisisService.getCrisises().then(crisises=>this.crisises=crisises);
    }

    constructor(
        private crisisService:CrisisService,
        private router:Router,
        private route:ActivatedRoute
    ){}

    onSelect(crisis:Crisis){
        this.selectedCrisis=crisis;
        //navigate to the selected crisis
     //   this.router.navigate([crisis.id],{relativeTo:this.route});
     this.router.navigate(['/crisis-center',this.selectedCrisis.id]);
    }

}