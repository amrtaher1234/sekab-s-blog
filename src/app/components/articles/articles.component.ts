import { Component, OnInit } from '@angular/core';
import { ArticleService, Post } from '../../@core/services/article.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GlobalService } from '../../@core/services/global.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Observable<Post[]>;
  constructor(
    private router: Router,
    private articlesService: ArticleService) {

    this.articles = this.articlesService.fetchPosts();
  }

  ngOnInit() {
  }
  goTo(article) {
    // changing the format to be friendly in the browser url.
    const header = article.header.split(' ').join('_');
    this.router.navigate(['/article', header]);

  }

}
