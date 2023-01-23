import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Adri' },
    { id: 3, name: 'Will' }
  ]
}
