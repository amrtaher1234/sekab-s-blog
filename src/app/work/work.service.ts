import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


export interface Work {
  image: string;
  text: string;
  header: string;
  link: string;
  genre: string;
}
@Injectable({
  providedIn: 'root'
})
export class WorkService {

    constructor(private http: HttpClient, private db: AngularFirestore) { }
  getWork() {
    return this.db.collection('Work').get();
  }
}
