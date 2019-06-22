import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GlobalService } from '../services/global.service';
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private router: Router, private globals: GlobalService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.globals.isLoading = true;
    next.handle(req).subscribe(d => {
      this.globals.isLoading = false;
    });
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.globals.isLoading = false;
        }
        return event;
      }));

  }
}
