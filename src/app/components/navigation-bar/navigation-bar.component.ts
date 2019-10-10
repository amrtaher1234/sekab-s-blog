import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../@core/services/global.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ThemingService } from 'src/app/shared/services/theming.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  isAuthorized = false;
  constructor(
    private theming: ThemingService,
    private auth: AngularFireAuth,
    public globals: GlobalService) { }

  ngOnInit() {
    this.auth.authState.subscribe(response => {
      if (response) {
        this.isAuthorized = true;
      }
    });
  }
  changeTheme() {
    const currentTheme = this.theming.currentTheme.getValue();
    currentTheme === 'dark-theme' ? this.theming.currentTheme.next('light-theme') :
      this.theming.currentTheme.next('dark-theme');

    localStorage.setItem('currentTheme', this.theming.currentTheme.getValue());
  }

}
