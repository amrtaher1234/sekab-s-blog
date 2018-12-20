import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './about/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore'; 
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AboutComponent,
    GalleryComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //
    MaterialModule,

    HttpClientModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }