import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, tap, finalize } from 'rxjs/operators';
import { GlobalService } from 'src/app/global.service';

export interface Post {
  header: string ;
  votes: number ;
  tag: string[] ;
  icon: string ;
  time: string ;
  content?: any[];
  id?: string;
  post?: string;
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
    private globalService: GlobalService,
    private db: AngularFirestore) {

   }
   public fetchPosts(): Observable<Post[]> {
    return this.globalService.loaderSubscription(this.db.collection('Posts').get().pipe(
      map(snap => {
      const result = [] as Post[];
      snap.forEach(s => result.push(s.data() as Post));
      return result;
    })));
   }
   public getPost(header): Promise<Post> {
     return this.globalService.loaderPromises(
       this.db.firestore.collection('Posts').where('header' , '==' , header).get()
     .then(res => {
       let postResult = {} as Post;
       postResult = res.docs[0].data() as Post;
       postResult.id = res.docs[0].id;
       return postResult;
     }));
   }
   public addPost(post: Post) {

    return this.globalService.loaderPromises(this.db.firestore.collection('Posts').add(post));
   }
   public getPostById(id) {
    return this.globalService.loaderPromises(this.db.firestore.collection
      ('Posts').doc(id).get());
   }
   public updatePost(post: Post , id: string) {
     return this.globalService.loaderPromises
     (this.db.firestore.collection('Posts').doc(id).set(post));
   }
   public upVote(id: string , value: number) {
     return this.globalService.loaderPromises
     (this.db.firestore.collection('Posts').doc(id).update({votes : value}));
   }
}
