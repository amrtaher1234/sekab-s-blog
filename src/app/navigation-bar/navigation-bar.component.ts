import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  isAuthorized = false;
  constructor(
    private auth: AngularFireAuth,
    public globals: GlobalService) { }

  ngOnInit() {
    this.auth.authState.subscribe(response => {
      if (response) {
        this.isAuthorized = true;
      }
    });
  }

}
