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
      title: 'Exploring the Mountains',
      body: 'Last weekend, I went hiking through the Rockies. The view from the summit was breathtaking and totally worth the climb.',
      createdAt: new Date('2023-10-01T10:00:00Z'),
    },
    {
      id: 2,
      userId: 2,
      title: 'My Favorite Coding Tips',
      body: 'Always write clean and readable code. Use meaningful variable names and remember: comments are your future self’s best friend.',
      createdAt: new Date('2023-10-02T12:30:00Z'),
    },
    {
      id: 3,
      userId: 3,
      title: 'A Day in the Life of a Developer',
      body: 'From debugging JavaScript to reviewing pull requests, every day brings something new. Coffee helps a lot!',
      createdAt: new Date('2023-10-03T08:15:00Z'),
    },
    {
      id: 4,
      userId: 4,
      title: 'Top 5 Movies to Watch This Summer',
      body: 'If you’re into thrillers and sci-fi, don’t miss these upcoming blockbusters. I’ll definitely be at the midnight releases!',
      createdAt: new Date('2023-10-04T14:45:00Z'),
    },
    {
      id: 5,
      userId: 5,
      title: 'How I Built My First App',
      body: 'It started with an idea and a lot of late nights. I used Angular, Node.js, and Firebase to bring it to life.',
      createdAt: new Date('2023-10-05T16:20:00Z'),
    },
    {
      id: 6,
      userId: 1,
      title: 'The Power of Mindfulness',
      body: 'Taking 10 minutes a day to meditate has made a huge difference in my focus and stress levels. Highly recommend it!',
      createdAt: new Date('2023-10-06T09:00:00Z'),
    },
    {
      id: 7,
      userId: 2,
      title: 'Why I Switched to Linux',
      body: 'After years on Windows, I decided to switch to Ubuntu. The transition was smoother than expected, and I love the control.',
      createdAt: new Date('2023-10-07T11:30:00Z'),
    },
    {
      id: 8,
      userId: 3,
      title: 'Best Practices for UX Design',
      body: 'Design isn’t just about looks—it’s about user experience. Focus on clarity, feedback, and consistency.',
      createdAt: new Date('2023-10-08T13:15:00Z'),
    },
    {
      id: 9,
      userId: 4,
      title: 'Traveling Through Europe',
      body: 'From the canals of Venice to the castles of Germany, Europe is full of history and culture. Can’t wait to go back!',
      createdAt: new Date('2023-10-09T15:00:00Z'),
    },
    {
      id: 10,
      userId: 5,
      title: 'Learning TypeScript as a Beginner',
      body: 'At first it was overwhelming, but understanding types has made my code more predictable and easier to debug.',
      createdAt: new Date('2023-10-10T17:45:00Z'),
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
}
