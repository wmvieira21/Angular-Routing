import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [ServersService]
})
export class ServersComponent implements OnInit {
  serversLocal: { serverName: string, id: number, status: string }[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private serversService: ServersService) {
  }

  onReloadPage() {
    /*Break the system. It does not exist a route /servers/servers*/
    /*this.router.navigate(['servers'], { relativeTo: this.route });*/
  }

  ngOnInit(): void {
    this.serversLocal = this.serversService.servers;
  }
}
