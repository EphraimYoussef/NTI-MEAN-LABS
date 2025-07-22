import { Component } from '@angular/core';
import { Ipost } from '../../interfaces/post.interface';
import { Post } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  posts: Ipost[] = [];
  constructor( private postService: Post){}
  ngOnInit(){
    this.posts = this.postService.getPosts();
    
  }
  removePost(id : number){
    this.postService.deletePost(id);
    this.posts = this.postService.getPosts();
  }
  toggle: boolean = false;
  toggleForm(){
    this.toggle = !this.toggle;
  }
}
