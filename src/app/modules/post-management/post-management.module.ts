import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { Routes, RouterModule } from '@angular/router';
import { PostWritingComponent } from './components/post-writing/post-writing.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'post-writing', component: PostWritingComponent },
  { path: 'post-writing/:id', component: PostWritingComponent },
  { path: '', pathMatch: 'full', redirectTo: 'settings' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PostWritingComponent,
    SettingsComponent,
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
