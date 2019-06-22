import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, ArticleService } from 'src/app/@core/services/article.service';
import { GlobalService } from 'src/app/@core/services/global.service';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  articles: Observable<Post[]>;
  constructor(
    private snack: MatSnackBar,
    private settingService: SettingsService,
    private router: Router,
    private articlesService: ArticleService) {

    this.articles = this.articlesService.fetchPosts();
  }

  ngOnInit() {
  }
  async edit(article: Post) {
    const url = await this.settingService.editPost(article);
    if (url) {
      this.router.navigate([`post-management/post-writing/${url}`]);
    }
  }
  delete(article: Post) {
    this.settingService.deletePost(article).then(() => {
      this.snack.open('post deleted successfully');
    });
  }
}
