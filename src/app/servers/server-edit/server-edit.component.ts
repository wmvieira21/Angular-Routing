import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard-service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css'],
  providers: []
})
export class ServerEditComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  serverLoaded = { serverName: '', id: 0, status: '' };
  @ViewChild('statusValue') statusValue: any;

  serverNameEdit = '';

  queryParamsSubscription = new Subscription();
  fragmentSubscription = new Subscription();
  allowEdit = false;
  savedChanges = false;
  id = 0;

  constructor(private route: ActivatedRoute, private serversService: ServersService, private router: Router) { }

  ngOnInit(): void {
    /*Retiveve the query params or fragment
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);*/

    /*Listen to any change in the query params or fragment BEST SOLUTION
    NOTE: unsubscribe on OnDestroy*/
    this.queryParamsSubscription = this.route.queryParams.subscribe((queryParams) => {
      this.allowEdit = (queryParams['allowEdit'] === '1');
    });
    this.fragmentSubscription = this.route.fragment.subscribe();

    /*+ indica que o id é um number*/
    this.id = +this.route.snapshot.params['id'];
    this.getServerById(this.id);

    this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.getServerById(this.id);
    }
    );
  }
  getServerById(id: number) {
    this.serverLoaded = this.serversService.getServersById(id);
    this.serverNameEdit = this.serverLoaded.serverName;
  }

  updateServer() {
    this.savedChanges = true;
    this.serversService.updateServer(this.id, { nmServer: this.serverNameEdit });

    this.serversService.serversChanged.emit();
    this.router.navigate(['../'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }

    if (this.serverNameEdit !== this.serverLoaded.serverName
      && !this.savedChanges) {
      return confirm('Are you sure you want to exit?');
    }
    return true;
  }

  ngOnDestroy(): void {
    this.fragmentSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
}
