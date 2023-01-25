import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ServerEditComponent } from "./servers/server-edit/server-edit.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRouter: Routes = [
    { path: '', component: HomeComponent },

    {
        path: 'servers',
        //canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent, children: [
            { path: ':id/edit', component: ServerEditComponent },
            { path: ':id', component: ServerComponent, }
            /*dont forget to define the router-outlet in the html file*/
        ]
    },


    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
            /*dont forget to define the router-outlet in the html file*/
        ]
    },

    /*Just in case the user enters an unknown URL*/
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }

];


@NgModule({
    imports: [
        RouterModule.forRoot(appRouter)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}