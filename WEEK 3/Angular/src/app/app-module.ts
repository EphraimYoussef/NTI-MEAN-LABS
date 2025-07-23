import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Posts } from './components/posts/posts';
import { User } from './components/user/user';
import { NewPost } from './components/new-post/new-post';
import { LikesAndComments } from './components/likes-and-comments/likes-and-comments';
import { Login } from './components/login/login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    App,
    Navbar,
    Posts,
    User,
    LikesAndComments,
    NewPost,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ 
      positionClass: 'toast-top-right' , 
      timeOut: 2500, closeButton: true, progressBar: true })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
