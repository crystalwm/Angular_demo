import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisCenterComponent} from './crisis-center.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CanDeactivateGuardCrisisDetailService} from './can-deactive-guarid-crisis-detail.service';
import {CrisisDetailResolveService} from './crisis-detail-resolve.service';


const routes:Routes=[
      {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
      },
      {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
          {
            path: '',
            component: CrisisListComponent,
            children: [
              {
                path: ':id',
                component: CrisisDetailComponent,
                canDeactivate:[CanDeactivateGuardCrisisDetailService],
                resolve:{
                  editName:CrisisDetailResolveService
                }
              },
              {
                path: '',
                component: CrisisCenterHomeComponent
              }
            ]
          }
        ]
      }
    ];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class CrisisCenterRoutingModule{}