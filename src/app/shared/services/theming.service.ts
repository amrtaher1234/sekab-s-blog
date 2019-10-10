import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  currentTheme: BehaviorSubject<string>;
  constructor() {
    if (localStorage.getItem('currentTheme')) {
      console.log('here', localStorage);
      this.currentTheme = new BehaviorSubject<string>(localStorage.getItem('currentTheme'));
    } else {
      this.currentTheme = new BehaviorSubject<string>('light-theme');
    }
  }
}
