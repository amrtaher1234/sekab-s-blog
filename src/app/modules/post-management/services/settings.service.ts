import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { Post } from 'src/app/articles/article/article.service';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    currentPost: Observable<Post>;
    constructor(private http: HttpClient,
        private globalService: GlobalService,
        private db: AngularFirestore) {

    }
    deletePost(article: Post): Promise<any> {
        return this.globalService.loaderPromises(this.db.firestore.collection('Posts').where('header', '==', article.header).get()
            .then(snapshots => {
                return this.db.firestore.collection('Posts').doc(snapshots.docs[0].id).delete();
            }));
    }
    editPost(article: Post): Promise<string> {
        return this.globalService.loaderPromises(this.db.firestore.collection('Posts').where('header', '==', article.header).get()
            .then(snapshots => {
                return snapshots.docs[0].id;
            }));
    }
}
