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

  articles : Observable<Post[]>
  constructor(
    private router : Router,
    private articlesService : ArticleService) { 

    this.articles = this.articlesService.fetchPosts(); 
    this.articles.subscribe(data => console.log(data) , err => console.log(err)); 
  }

  ngOnInit() {
  }
  goTo(article){
    console.log(article);
    this.router.navigate(["/article" , article.header]); 

  }

}
