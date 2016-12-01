import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a routerLink='/admin' routerLinkActive="active">Admin</a>
        <a routerLink='login' routerLinkActive="active">Login</a>
        <router-outlet></router-outlet>
    `,
    styles:[
        `
        a {
            text-decoration: none;
            border: 1px solid #eee;
            padding: 5px;
            background-color: lavender;
            border-radius: 5px;
        }
        a:hover{
            background-color:thistle;
        }
        a.active {
            background-color:thistle;
        }
`
    ]
}
)
export class AppComponent{
    title="tour of heroes";

}