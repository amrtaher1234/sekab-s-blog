import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { WorkComponent } from './components/work/work.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './@core/guards/login.guard';

const routes: Routes = [
  { path: 'about', component: AboutComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'articles', component: ArticlesComponent, },
  { path: 'article/:name', component: ArticleComponent, },
  {
    path: 'post-management',
    loadChildren: './modules/post-management/post-management.module#PostManagementModule',
    canActivate: [LoginGuard]
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
