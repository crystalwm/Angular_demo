import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {ManageCrisisesComponent} from './manage-crisises.component';
import {ManageHeroesComponent} from './manage-heroes.component';
import {AdminDashboardComponent} from './admin-dashboard.component';
@NgModule({
    imports:[
        AdminRoutingModule
        ],
    declarations:[
        AdminComponent,
        ManageCrisisesComponent,
        ManageHeroesComponent,
        AdminDashboardComponent
    ],
    bootstrap:[AdminComponent]
})
export class AdminModule{}