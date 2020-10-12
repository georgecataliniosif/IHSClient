
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

     

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  currentUser:User;
  getAuthenticatedUserUrl:string = 'http://localhost:57729/api/users/getuser';

    constructor(public http:HttpClient) { }


login(username:string,password:string):User{
    let user:User;

    if(username === 'Admin' && password==='admin' ){
       user = {
           Role : 'admin',
           Id : 1,
           Name : 'Admin'
       }
       this.currentUser = user;
       localStorage.setItem('currentUser',JSON.stringify(user));
       return user;
    }
    
    if(username === 'gogu' && password==='pass' ){
        user = {
            Role : 'user',
            Id : 1,
            Name : 'gogu'
        }
        this.currentUser = user;
        localStorage.setItem('currentUser',JSON.stringify(user));
        return user;
     }

     
  }

  getUser(username:string,password:string){
    debugger
    let url = 'http://localhost:57729/api/users/getuser?name=' + username + '&password=' + password;
    this.http.get(url).subscribe((res:Response) =>{

      debugger
      return res.json();
    })
     
  }

  formatUser(user:any):User{
    return {
      Id:user.Id, 
      Name:user.Name,
      Role:user.Role
    }
  }

  logout(){
      debugger
      localStorage.clear();
  }


}