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
}
