import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Posts } from './components/posts/posts';
import { User } from './components/user/user';
import { NewPost } from './components/new-post/new-post';
import { LikesAndComments } from './components/likes-and-comments/likes-and-comments';

@NgModule({
  declarations: [
    App,
    Navbar,
    Posts,
    User,
    LikesAndComments,
    NewPost
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
