import { Component } from '@angular/core';
import { Ipost } from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  posts: Ipost[] = [
    {
      id: 1,
      userId: 1,
      username: 'JohnDoe',
      title: 'Exploring the Mountains',
      body: 'Last weekend, I went hiking through the Rockies. The view from the summit was breathtaking and totally worth the climb.'
    },
    {
      id: 2,
      userId: 2,
      username: 'JaneSmith',
      title: 'My Favorite Coding Tips',
      body: 'Always write clean and readable code. Use meaningful variable names and remember: comments are your future self’s best friend.'
    },
    {
      id: 3,
      userId: 3,
      username: 'AliceJohnson',
      title: 'A Day in the Life of a Developer',
      body: 'From debugging JavaScript to reviewing pull requests, every day brings something new. Coffee helps a lot!'
    },
    {
      id: 4,
      userId: 4,
      username: 'BobBrown',
      title: 'Top 5 Movies to Watch This Summer',
      body: 'If you’re into thrillers and sci-fi, don’t miss these upcoming blockbusters. I’ll definitely be at the midnight releases!'
    },
    {
      id: 5,
      userId: 5,
      username: 'CharlieDavis',
      title: 'How I Built My First App',
      body: 'It started with an idea and a lot of late nights. I used Angular, Node.js, and Firebase to bring it to life.'
    },
    {
      id: 6,
      userId: 6,
      username: 'EveWhite',
      title: 'The Power of Mindfulness',
      body: 'Taking 10 minutes a day to meditate has made a huge difference in my focus and stress levels. Highly recommend it!'
    },
    {
      id: 7,
      userId: 7,
      username: 'FrankGreen',
      title: 'Why I Switched to Linux',
      body: 'After years on Windows, I decided to switch to Ubuntu. The transition was smoother than expected, and I love the control.'
    },
    {
      id: 8,
      userId: 8,
      username: 'GraceBlack',
      title: 'Best Practices for UX Design',
      body: 'Design isn’t just about looks—it’s about user experience. Focus on clarity, feedback, and consistency.'
    },
    {
      id: 9,
      userId: 9,
      username: 'HankBlue',
      title: 'Traveling Through Europe',
      body: 'From the canals of Venice to the castles of Germany, Europe is full of history and culture. Can’t wait to go back!'
    },
    {
      id: 10,
      userId: 10,
      username: 'IvyRed',
      title: 'Learning TypeScript as a Beginner',
      body: 'At first it was overwhelming, but understanding types has made my code more predictable and easier to debug.'
    }
  ];

}
