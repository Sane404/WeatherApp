import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { DatacheckService } from '../services/datacheck.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:FormGroup;
  register:FormGroup;
  showLogout:boolean;
  showLoginForm:boolean;
  showRegisterForm:boolean;
  db:any;
  constructor(private router:Router,private check:DatacheckService,private database:DatabaseService) { }
  ngOnInit() {
    this.login = new FormGroup({
      nickname:new FormControl('Alex'),
      password:new FormControl('1234')
    });
    this.register = new FormGroup({
      nickname:new FormControl('John'),
      password:new FormControl('4444')
    });
    if(this.check.loggedin || this.check.loggedAsAdmin){
      this.showLogout = true;
      this.showLoginForm = false;
    }
    else{this.showLogout = false;
         this.showLoginForm = true;
    }
    if(localStorage.getItem('Users')){
      this.database.getLocalStorageData();
    }
    //show userData
    this.db = this.database.getUserData();
  }
  submit(form){
    this.check.login(form.value.nickname,form.value.password);
    if(this.check.loggedin || this.check.loggedAsAdmin){
      this.router.navigate(['home']);
    }
  }
  logout(){
    this.showLogout = false;
    this.showLoginForm = true;
    this.check.logout();
  }
  reg(form){
    let users = this.database.getUserData()
    users.push(form.value);
    localStorage.setItem('Users',JSON.stringify(users));
    this.showLogout = false;
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }
  RegisterFormToggler(){
    this.showLogout = false;
    this.showLoginForm = false;
    this.showRegisterForm = true;
  }
  LoginFormToggler(){
    this.showLogout = false;
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }
}
