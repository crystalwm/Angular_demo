import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';



const routes:Routes=[
    {
        path:'heroes',
        component:HeroComponent
    },
    {
        path:'crisis-center',
        component:CrisisCenterComponent
    },
    {
        path:'',
        redirectTo:'crisis-center',
        pathMatch:'full'
    }
    ];


@NgModule({
    imports: [ 
        RouterModule.forRoot(routes)
         ],

   exports:[RouterModule]
})
export class AppRoutingModule { }
