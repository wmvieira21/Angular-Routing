import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot, CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.isAuthenticated()
            .then(
                (auth: boolean) => {
                    return auth;
                });


    }
}