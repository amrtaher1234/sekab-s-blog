import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { Routes, RouterModule } from '@angular/router';
import { PostWritingComponent } from './post-writing/post-writing.component';
import { LoginGuard } from 'src/app/authentication/login.guard';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: PostWritingComponent, canActivate: [LoginGuard] },
    { path: ':id', component: PostWritingComponent, canActivate: [LoginGuard] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
      PostWritingComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: []
})
export class PostManagementModule { }
