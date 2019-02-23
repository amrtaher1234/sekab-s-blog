import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService, Post } from './article.service';
import { HighlightService } from 'src/app/highlight.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  post: Promise<Post>;
  constructor(
    private highlightService: HighlightService,
    private route: ActivatedRoute, private articleService: ArticleService) {
  }



  ngOnInit() {
    const postHeader = this.route.snapshot.paramMap.get('name');
    this.post = this.articleService.getPost(postHeader).finally(() => {
      setTimeout(() => {
        this.highlightService.highlightAll();
      }, 0);
    });
  }
}
