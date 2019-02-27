import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public isLoading = false;
  constructor() { }
  public loaderSubscription(sub: Observable<any>): Observable<any> {
    this.isLoading  = true;
    return sub.pipe(
    finalize(() => this.isLoading = false));
   }
   public loaderPromises(prom: Promise<any>): Promise<any> {
     this.isLoading = true;
     return prom.then(res => {
       return res;
     }).finally(() => {
       this.isLoading = false;
     });
   }
}
