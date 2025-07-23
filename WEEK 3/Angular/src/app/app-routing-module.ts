import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './components/posts/posts';
import { Login } from './components/login/login';

const routes: Routes = [
  { path: "", component: Posts},
  { path: "posts", component: Posts },
  { path: "login", component:Login}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
