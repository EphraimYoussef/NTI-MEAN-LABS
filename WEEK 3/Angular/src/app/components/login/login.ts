import { Component } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder , 
              private userService: UserService , 
              private router: Router,
              private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      const user = this.userService.login(username, password);
      if (user) {
        this.toastr.success('Login successful');
        console.log('Login successful', user);
        this.userService.setLoggedInUser(user);
        this.router.navigate(['/posts']);
      } 
      else {
        this.toastr.error('Login failed');
        console.log('Login failed');
      }
    } 
    else {
      this.toastr.error('Please fill in all fields correctly');
      console.log('Wrong credentials');
    }
  }
}
