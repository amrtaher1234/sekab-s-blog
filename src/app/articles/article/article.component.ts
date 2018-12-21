import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticleService, Post } from './article.service';
import { HighlightService } from 'src/app/highlight.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  post: Post;
  highlighted: boolean;
  constructor(
    private angularfire: AngularFirestore,
    private highlightService: HighlightService,
    private route: ActivatedRoute, private articleService: ArticleService) {
    this.highlighted = false;
    this.post = null;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit() {
    const postHeader = this.route.snapshot.paramMap.get('name');
    console.log(postHeader);
    this.articleService.getPost(postHeader).then(snapshot => {
      snapshot.forEach(snap => {
        this.post = snap.data() as Post;
        setTimeout(() => {
          this.highlightService.highlightAll();
        }, 0);
      });
    });
  }

  handleCode(code: string): string {
    return 'str';
  }
  testPush() {
    const multistr = 'var i =1; \n var j =0; \n for( i ; i>100; i++){\n j++';
    this.angularfire.collection('Posts').add({ tt: multistr }).then(d => {
      console.log(d);
    }).catch(err => {
      console.log(err);
    });
  }
}
