import { Injectable } from '@angular/core';
import { DatacheckService } from './datacheck.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private datacheck:DatacheckService,private router:Router) { }
  canActivate(){
    if(this.datacheck.loggedin || this.datacheck.loggedAsAdmin){
      console.log(this.datacheck.loggedin,this.datacheck.loggedAsAdmin)
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;
    }
  }
    
}
