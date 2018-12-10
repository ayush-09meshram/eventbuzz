import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {default as jwt_decode} from 'jwt-decode';
import { map } from 'rxjs/operators';
import {User} from '../user';
@Injectable({
  providedIn: 'root'
  
})
export class AuthenticationserviceService {

  constructor(private http: HttpClient) { }

  login(username:string,password:string)
  {
   // this.user().userId=username;
    //this.user.password=password;
    console.log(username);
    //return this.http.post<any>('http://localhost:8085/user/login',{"userId":username,"password":password})
    return this.http.post<any>('http://13.127.170.181:8050/user/login',{"userId":username,"password":password})
    .subscribe((data)=>{
      console.log('data in service: token obtained',data);
      localStorage.clear();
      localStorage.setItem('currentUser',data.token);
      try{
      const tokenObtained = localStorage.getItem('currentUser');
      jwt_decode(tokenObtained);
      console.log('decoded token',jwt_decode(tokenObtained));
      }
      catch(error){
        console.log(error);
      }
    },
    (error)=>{console.log(error)});
  }
  logout()
  {
    localStorage.removeItem('currentUser');
  }

  getLoginUser(email: string) {
    console.log('login details');
   // const geturl = `http://localhost:5084/user/userId/${email}`;
    const geturl = `http://13.127.170.181:8050/user/userId/${email}`;
    this.http.get(geturl).subscribe(
      data => {
        console.log('authenticated and got user',data);
        //console.log('get Request is successful for user', data);
      },
      error => {
        console.log('Error', error);
      });
    return this.http.get(geturl);
  }
}
//JSON.stringify(this.user)
//{username:username,password:password}
//.pipe(map(user=>{
 /* if(user&&user.token)
  {
    localStorage.setItem('currentUser',JSON.stringify(user));
  }
  return user;
}))*/