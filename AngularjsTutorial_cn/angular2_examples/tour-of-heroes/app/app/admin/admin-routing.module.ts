import {RouterModule,Route} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {ManageCrisisesComponent} from './manage-crisises.component';
import {ManageHeroesComponent} from './manage-heroes.component';
import {AdminComponent} from './admin.component';
import {AuthGuardService} from '../auth-guard.service';

const routes:Route[]=[{
        path:'admin',
        component:AdminComponent,
        children:[{
            path:'',
            canActivate:[AuthGuardService],
            children:[
                {
                    path:'crisises',
                    component:ManageCrisisesComponent
                },
                {
                    path:'heroes',
                    component:ManageHeroesComponent
                },
                {
                    path:'',
                    component:AdminDashboardComponent
                }

            ]
        }]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AdminRoutingModule{

}