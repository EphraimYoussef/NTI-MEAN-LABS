import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: IUser[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      password: 'alice123'
    },
    {
      id: 2,
      name: 'Bob Smith',
      imgUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      password: 'bob456'
    },
    {
      id: 3,
      name: 'Clara Davis',
      imgUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      password: 'clara789'
    },
    {
      id: 4,
      name: 'David Lee',
      imgUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
      password: 'david101'
    },
    {
      id: 5,
      name: 'Eva Martinez',
      imgUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
      password: 'eva202'
    }
  ];
  getUserById(id : number): IUser | undefined {
    return this.users.find(user => user.id === id);
  }
  getAllUsers(): IUser[] {
    return this.users;
  }
  addUser(user: IUser): void {
    this.users.push(user);
  }
  updateUser(id: number, updatedUser: IUser): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  login(username: string, password: string): IUser | undefined {
    return this.users.find(user => user.name === username && user.password === password);
  }

  setLoggedInUser(user: IUser): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  getLoggedInUser(): IUser | null {
    const user = localStorage.getItem('loggedInUser');
    console.log('user from localStorage:', user );
    
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }
}
