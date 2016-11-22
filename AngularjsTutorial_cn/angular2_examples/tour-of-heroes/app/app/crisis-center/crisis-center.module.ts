import {NgModule} from '@angular/core';
import {CrisisCenterRoutingModule} from './crisis-center-routing.module';

import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisListComponent} from './crisis-list.component';



@NgModule({
    imports:[CrisisCenterRoutingModule],
    declarations:[
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent,
        CrisisListComponent
        ],
    bootstrap:[CrisisCenterComponent]
})
export class CrisisCenterModule{}