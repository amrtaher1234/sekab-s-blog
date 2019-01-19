import { Component, OnInit } from '@angular/core';
import { ArticleService, Post } from './article/article.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Post[];
  constructor(
    private router: Router,
    private articlesService: ArticleService) {

    this.articlesService.fetchPosts().then(snap => {
      this.articles = snap.docs.map(val => val.data() as Post);
      console.log(this.articles);
    });
    // this.articles.subscribe(data => console.log(data) , err => console.log(err));
  }

  ngOnInit() {
  }
  goTo(article) {
    console.log(article);
    this.router.navigate(['/article' , article.header]);

  }

}
