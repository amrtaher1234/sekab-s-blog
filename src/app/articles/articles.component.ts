import { Component, OnInit } from '@angular/core';
import { ArticleService, Post } from './article/article.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Observable<Post[]>;
  constructor(
    private globals: GlobalService,
    private router: Router,
    private articlesService: ArticleService) {

    this.globals.isLoading = true;
    this.articles = this.articlesService.fetchPosts();
  }

  ngOnInit() {
  }
  goTo(article) {
    this.router.navigate(['/article', article.header]);

  }

}
