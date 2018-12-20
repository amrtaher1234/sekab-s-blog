import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { PostWrittingComponent } from './post-writting/post-writting.component';

const routes: Routes = [
  {path : 'about' , component : AboutComponent ,  },
  {path : 'articles' , component : ArticlesComponent ,  },
  {path : 'article/:name' , component : ArticleComponent ,  },
  {path : 'post-writtng' , component : PostWrittingComponent ,  },
  {path : 'post-writtng/:id' , component : PostWrittingComponent ,  },
  { path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
