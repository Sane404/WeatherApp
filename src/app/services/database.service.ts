import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  userData:any[] = [{"nickname":"Alex", "password":"1234"},
  {"nickname":"John", "password":"4567"}];
  constructor() { }
  getUserData(){
    return this.userData;
  }
  getLocalStorageData(){
    this.userData = JSON.parse(localStorage.getItem('Users'));
  }
}
