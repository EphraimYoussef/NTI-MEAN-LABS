import { Component } from '@angular/core';
import { Post } from '../../services/post/post.service';
import { Ipost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-new-post',
  standalone: false,
  templateUrl: './new-post.html',
  styleUrl: './new-post.css'
})
export class NewPost {
  posts: Ipost[] = [];
  constructor(private postService: Post){}

  createNewPost(): Ipost {
    const newId = this.posts.length > 0 ? this.posts[this.posts.length - 1].id + 1 : 1;
    return {
      id: newId,
      userId: 1,
      title: '',
      body: '',
      createdAt: new Date(),
      votes: 0,
      comments: [],
      imageUrl: ''
    };
  }

  newPost !: Ipost

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.newPost = this.createNewPost();
  }  

  submitPost(): void {
    this.newPost.userId = parseInt(this.newPost.userId.toString());
    this.postService.addPost(this.newPost);
    this.posts = this.postService.getPosts();
    this.newPost = this.createNewPost();
  }
}
