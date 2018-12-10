import { Injectable } from '@angular/core';
import { User } from '../loginauthentication/user';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CoreDataService {
  private user: User;
  private emailSource=new BehaviorSubject("default");
  currentemail=this.emailSource.asObservable();

  constructor() { }

  // changeUser(userin:User) {
  //   console.log("changed in service",userin);
  //   this.user= userin;
  //   console.log("user in service",this.user.userId);
  // }

  // getDataUser(){
  //       return this.user;
  // }
changeEmail(email:string)
{
  this.emailSource.next(email);
}
    



}