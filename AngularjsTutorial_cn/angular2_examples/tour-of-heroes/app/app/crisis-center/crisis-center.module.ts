import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';

import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisService} from './crisis.service';



@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        CrisisCenterRoutingModule
        ],
    declarations:[
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent
        ],
    providers:[CrisisService],
    bootstrap:[CrisisCenterComponent]
})
export class CrisisCenterModule{}