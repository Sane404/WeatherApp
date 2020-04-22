import { Injectable } from '@angular/core';
import  { DatabaseService } from '../services/database.service';
@Injectable({
  providedIn: 'root'
})
export class DatacheckService {
  loggedin:boolean = false;
  loggedAsAdmin:boolean = false;
  constructor(private database:DatabaseService) { }
  login(nick,pass){
    if(nick === 'Admin' && pass === 'Admin'){
      this.loggedAsAdmin = true;
    }
    else{
    let result = this.database.getUserData().filter(function(item) { return item.nickname == nick && item.password == pass;});
    if(result.length === 1){
      this.loggedin = true;
    }
    else if(result.length === 0){
      this.loggedin = false;
    }
    }
  }
  logout(){
    this.loggedin = false;
    this.loggedAsAdmin = false;
  }
}
