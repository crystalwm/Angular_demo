import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';;



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
        path:'admin',
        component:AdminComponent
    },
    {
        path:'login',
        component:LoginComponent
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
