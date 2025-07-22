import { Component, Input } from '@angular/core';
import { Ipost } from '../../interfaces/post.interface';
import { Post } from '../../services/post/post.service';

@Component({
  selector: 'app-likes-and-comments',
  standalone: false,
  templateUrl: './likes-and-comments.html',
  styleUrl: './likes-and-comments.css'
})
export class LikesAndComments {
  posts: Ipost[] = [];
  @Input() post !: Ipost;
  constructor( private postService: Post) {}
  
  upVotePost(id: number) {
    console.log("upvote");
    
    this.postService.upVotePost(id);
    this.posts = this.postService.getPosts();
  }

  downVotePost(id: number) {
    console.log("downvote");
    this.postService.downVotePost(id);
    this.posts = this.postService.getPosts();
  }

  comment: string = '';
  commentPost(id: number) {
    console.log( "comment " , this.comment);
    console.log( "id " , id);
    
    
    console.log("comment");
    this.postService.commentPost(id , this.comment);
    this.posts = this.postService.getPosts();
    this.comment = '';
  }
}
