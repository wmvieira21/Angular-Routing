import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/server-edit/can-deactivate-guard-service';
import { FormsModule } from '@angular/forms';
import { ServersService } from './servers/servers.service';
import { ErrorComponent } from './error/error.componenet';
import { ServerResolver } from './servers/server/server.resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    ServerEditComponent,
    ServerComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, CanDeactivateGuard, ServersService, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
