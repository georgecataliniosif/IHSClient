import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService.service';
import {Router} from '@angular/router'
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  userName:string = '';
  password:string = '';

   userResult:User;

  constructor(public authService:AuthService,
              public router:Router) { }

  ngOnInit(): void {
    
   
  }

  loginClick(userName:string,password:string){
    
    let result = this.authService.getUser(userName,password)   
    debugger
     this.authService.login(userName,password);
            
    


     if(!this.authService.currentUser){
     alert('User Name or Password is Incorect');
    }
    else{
      this.router.navigate(['/home']);
    }
  }

}
