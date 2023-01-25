import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";

import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

/*class AuthGuard implementing CanActivate is used to guard/protect our routing from improper 
injection by the user. In this case the app will verify the method isAuthenticated in AuthService class in order to
validade the access in the routing Servers

AppRoutingModule
path: 'servers', canActivate: [AuthGuard],
*/

export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {

        /* return Stage a request to the server to get some info*/
        return this.auth.isAuthenticated()
            .then((auth: boolean) => {
                if (!auth) {
                    this.router.navigate(['/']);
                    return false;
                }
                return auth;
            });
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }
}