import { Component } from '@angular/core';
import { slideInAnimation } from './@core/animation';
import { RouterOutlet } from '@angular/router';
import { ThemingService } from './shared/services/theming.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  showFooter: boolean;
  currentTheme = 'light-theme';
  constructor(private theming: ThemingService) {
    this.showFooter = true;
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  showFooterF(bol) {
    if (bol) {
      setTimeout(() => {
        this.showFooter = bol;
      }, 700);
    } else {
      this.showFooter = bol;
    }
  }
}
