import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  onLoadServers() {
    this.router.navigate(['servers']);
  }
  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLoggin(){
    this.authService.loggin();
  }

  onLoggout(){
    this.authService.logout();
  }
}
