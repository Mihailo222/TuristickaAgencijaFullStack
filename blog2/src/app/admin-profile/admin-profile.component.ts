import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {  Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {


constructor(private authService: AuthService, private router:Router, private userService: UserService){}
userData:any;
users:User[];

ngOnInit(): void{

  this.getUserInfo();
  this.getUsers();
  

 
}


getUserInfo(){
  this.userService.getProfile().subscribe(
    (res) => {
      this.userData=res;
      console.log("RESSS",res);
    }
  )
}

logout(){
  this.authService.logout().subscribe(
  (res) => {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log(res);
   
  }
  );
}


getUsers(){
  this.userService.getUsers().subscribe(
    (res)=>{
      this.users = res;
      console.log(this.users);
    }
  )
}

deleteUser(user:User){
  this.userService.deleteUser(user).subscribe(
    (res) => {
      console.log(res);
      this.getUsers();
    }
  );

}










}

