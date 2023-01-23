import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ServerEditComponent } from './servers/server-edit/server-edit.component';

const appRouter: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'servers', component: ServersComponent, children: [
      { path: ':id/edit', component: ServerEditComponent },
      { path: ':id', component: ServerEditComponent, }
      /*dont forget to define the router-outlet in the html file*/
    ]
  },


  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
      /*dont forget to define the router-outlet in the html file*/
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    ServerEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
