import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  constructor(private users: UserService) {}
  @Input() userId !: number;
  @Input() postDate !: Date;
  user !: IUser;
  ngOnInit(){
    this.user = this.users.getUserById(this.userId)!;
    if(!this.user){
      throw new Error('User not foundddd');
    }
  }
}
