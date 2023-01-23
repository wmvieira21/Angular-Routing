import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: any;
  paramsSubscription: Subscription = new Subscription;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    /*If the user page is already loaded, this subcription will watch (observable) 
    por any change in the URL*/
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.user = {
        id: params['id'],
        name: params['name']
      }
    })
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
