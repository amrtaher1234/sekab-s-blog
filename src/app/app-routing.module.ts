import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { WorkComponent } from './work/work.component';
import { LoginComponent } from './authentication/login/login.component';
import { LoginGuard } from './authentication/login.guard';

const routes: Routes = [
  { path: 'about', component: AboutComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'articles', component: ArticlesComponent, },
  { path: 'article/:name', component: ArticleComponent, },
  {
    path: 'post-management',
    loadChildren : './modules/post-management/post-management.module#PostManagementModule',
    canActivate : [LoginGuard]
  },

  { path: 'work', component: WorkComponent, },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
