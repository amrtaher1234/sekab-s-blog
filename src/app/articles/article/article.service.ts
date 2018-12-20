import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Post{
  header : string , 
  votes : number , 
  tag : string[] , 
  icon : string , 
  time : string , 
  content : any[], 
}
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient,
    private db : AngularFirestore) {

   }
   public fetchPosts(){
    return this.db.collection('Posts').valueChanges() as Observable<Post[]>;
   }
}
