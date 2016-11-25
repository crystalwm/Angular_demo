import {Component} from '@angular/core';

@Component({
    template:`
        <h3>admin</h3>
        <nav>
            <a routerLink="./" routerLinkActive="active">Dashboard</a>
            <a routerLink='./crisises' routerLinkActiva="active">Manage Crisises</a>
            <a routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AdminComponent{}