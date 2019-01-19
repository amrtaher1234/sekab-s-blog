import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable} from 'rxjs';

import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private router: Router , private globals: GlobalService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.globals.isLoading = true;
      next.handle(req).subscribe(d => {
        console.log(d);
        this.globals.isLoading = false;
      });
      return next.handle(req);
    }
}
