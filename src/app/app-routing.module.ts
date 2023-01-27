import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { ErrorComponent } from "./error/error.componenet";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CanDeactivateGuard } from "./servers/server-edit/can-deactivate-guard-service";
import { ServerEditComponent } from "./servers/server-edit/server-edit.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServerResolver } from "./servers/server/server.resolver.service";
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
            { path: ':id/edit', component: ServerEditComponent, canDeactivate: [CanDeactivateGuard] },

            /*ServerResolver guard is executed before loading the ServerComponent*/
            { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } }
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
    //{ path: 'not-found', component: NotFoundComponent },

    /*Static data throght route, Data*/
    { path: 'not-found', component: ErrorComponent, data: { messageRoute: 'Page not found' } },


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