import { Injectable } from '@angular/core';
import { Ipost } from '../../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class Post {
private posts: Ipost[] = [
    {
      id: 1,
      userId: 1,
      title: "Exploring the Mountains",
      body: "Last weekend, I went hiking through the Rockies. The view from the summit was breathtaking and totally worth the climb.",
      createdAt: new Date("2023-10-01T10:00:00Z"),
      votes: 24,
      comments: ["Looks amazing!", "Which trail did you take?"],
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      userId: 2,
      title: "My Favorite Coding Tips",
      body: "Always write clean and readable code. Use meaningful variable names and remember: comments are your future self's best friend.",
      createdAt: new Date("2023-10-02T12:30:00Z"),
      votes: 42,
      comments: ["Great advice!", "Could you share more about documentation?"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      userId: 3,
      title: "A Day in the Life of a Developer",
      body: "From debugging JavaScript to reviewing pull requests, every day brings something new. Coffee helps a lot!",
      createdAt: new Date("2023-10-03T08:15:00Z"),
      votes: 18,
      comments: ["Relatable!", "How many cups do you drink?"],
      imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      userId: 4,
      title: "Top 5 Movies to Watch This Summer",
      body: "If you're into thrillers and sci-fi, don't miss these upcoming blockbusters. I'll definitely be at the midnight releases!",
      createdAt: new Date("2023-10-04T14:45:00Z"),
      votes: 31,
      comments: ["What's your #1 pick?", "Any good horror movies?"],
      imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      userId: 5,
      title: "How I Built My First App",
      body: "It started with an idea and a lot of late nights. I used Angular, Node.js, and Firebase to bring it to life.",
      createdAt: new Date("2023-10-05T16:20:00Z"),
      votes: 56,
      comments: ["Impressive!", "Would love to see the code"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      userId: 1,
      title: "The Power of Mindfulness",
      body: "Taking 10 minutes a day to meditate has made a huge difference in my focus and stress levels. Highly recommend it!",
      createdAt: new Date("2023-10-06T09:00:00Z"),
      votes: 29,
      comments: ["What technique do you use?", "I need to try this"],
      imageUrl: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      userId: 2,
      title: "Why I Switched to Linux",
      body: "After years on Windows, I decided to switch to Ubuntu. The transition was smoother than expected, and I love the control.",
      createdAt: new Date("2023-10-07T11:30:00Z"),
      votes: 38,
      comments: ["Which distro?", "Welcome to the club!"],
      imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      userId: 3,
      title: "Best Practices for UX Design",
      body: "Design isn't just about looks—it's about user experience. Focus on clarity, feedback, and consistency.",
      createdAt: new Date("2023-10-08T13:15:00Z"),
      votes: 47,
      comments: ["Great points!", "Any tools you recommend?"],
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      userId: 4,
      title: "Traveling Through Europe",
      body: "From the canals of Venice to the castles of Germany, Europe is full of history and culture. Can't wait to go back!",
      createdAt: new Date("2023-10-09T15:00:00Z"),
      votes: 63,
      comments: ["Favorite city?", "Planning my trip now!"],
      imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      userId: 5,
      title: "Learning TypeScript as a Beginner",
      body: "At first it was overwhelming, but understanding types has made my code more predictable and easier to debug.",
      createdAt: new Date("2023-10-10T17:45:00Z"),
      votes: 52,
      comments: ["How long did it take?", "Any learning resources?"],
      imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  getPosts(): Ipost[]{
    return this.posts;
  }
  getPostById(id: number): Ipost | undefined {
    return this.posts.find(post => post.id === id);
  }

  addPost(newPost: Ipost): void {
    this.posts.push(newPost);
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
  }

  updatePost(updatedPost : Ipost) : void {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = {
        ...this.posts[index],
        ...updatedPost
      };
    }
  }

  upVotePost(id: number): void {
    const post = this.getPostById(id);
    if (post) {
      post.votes += 1;
    }
  }
  downVotePost(id: number): void {
    const post = this.getPostById(id);
    if (post) {
      post.votes -= 1;
    }
  }

  commentPost(id: number , comment: string): void {
    const post = this.getPostById(id);
    if (post) {
      post.comments.push(comment);
    }
  }
}
