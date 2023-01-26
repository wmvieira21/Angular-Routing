import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  loadedServer = { serverName: String, id: Number, status: String };
  id = 0;
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //this.loadedServer = this.serversService.getServers();
    this.id = +this.route.snapshot.params['id'];
    this.loadedServer = this.serversService.getServersById(+this.id);

    this.route.params.subscribe((param) => {
      this.id = +param['id'];
      this.loadedServer = this.serversService.getServersById(+this.id);
    });


    /*Geting the server from the resolver gard class. Code above is no longer necessary*/
    this.route.data.subscribe((data: Data) => {
      this.loadedServer = data['server'];
    });


  }

  editServerSelected() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
