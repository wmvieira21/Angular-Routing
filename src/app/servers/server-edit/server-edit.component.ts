import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css'],
  providers: [ServersService]
})
export class ServerEditComponent implements OnInit, OnDestroy {
  serverLoaded = { serverName: String, id: Number, status: String };
  @ViewChild('statusValue') statusValue: any;
  queryParamsSubscription = new Subscription();
  fragmentSubscription = new Subscription();
  allowEdit = false;

  constructor(private route: ActivatedRoute, private serversService: ServersService) { }

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
    this.getServerById(+this.route.snapshot.params['id']);
    this.route.params.subscribe((param) => {
      this.getServerById(param['id']);
    }
    );
  }
  getServerById(id: number) {
    this.serverLoaded = this.serversService.getServersById(id);
  }

  select() {
    console.log('select=' + this.statusValue.nativeElement.value);
  }

  ngOnDestroy(): void {
    this.fragmentSubscription.unsubscribe();
    this.queryParamsSubscription.unsubscribe();
  }
}
