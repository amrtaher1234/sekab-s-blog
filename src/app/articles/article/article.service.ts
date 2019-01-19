import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Post {
  header: string ;
  votes: number ;
  tag: string[] ;
  icon: string ;
  time: string ;
  content: any[];
  id?: string;
}
export interface Content {
  type?: string;
  src?: string;
  code?: string;
  lang?: string;
  text?: string;
  li?: any[];
}
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  currentPost: Observable<Post>;
  constructor(private http: HttpClient,
    private db: AngularFirestore) {

   }
   public fetchPosts() {
    return this.db.collection('Posts').get().toPromise();
   }
   public getPost(header) {
     return  this.db.firestore.collection('Posts').where('header' , '==' , header).get();
   }
   public addPost(post: Post) {
     return this.db.firestore.collection('Posts').add(post);
   }
   public getPostById(id) {
     return this.db.firestore.collection('Posts').doc(id).get();
   }
   public updatePost(post: Post , id: string) {
     return this.db.firestore.collection('Posts').doc(id).set(post);
   }
   public upVote(id: string , value: number) {
     return this.db.firestore.collection('Posts').doc(id).update({votes : value});
   }
}
