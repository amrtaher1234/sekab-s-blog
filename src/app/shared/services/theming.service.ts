import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  currentTheme: BehaviorSubject<string> = new BehaviorSubject<string>('light-theme');
  constructor() { }
}
