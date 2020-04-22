import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { DatacheckService } from '../services/datacheck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedAsAdmin:boolean;
  constructor(private http:HttpRequestService,private role:DatacheckService) { }
  citiesData:any[] = [];
  ngOnInit(){
      //if cityID array exists in localstorage than overrite CityIds property in http service with array from local storage
      // if(localStorage.getItem('City ID')){
      //   this.http.defaultData().subscribe((x) => {this.citiesData = x.list,this.http.CityIds = JSON.parse(localStorage.getItem('City ID'))});
      // this.loggedAsAdmin = this.role.loggedAsAdmin;
      // }
      // else keep cityIds value in http service to default
    
        this.http.defaultData().subscribe((x) => this.citiesData = x.list);
        this.loggedAsAdmin = this.role.loggedAsAdmin;
      
      
  }
  AddCity(x){
   this.http.newCity(x.value).subscribe((new_data) => {this.citiesData.push(new_data),
                                                       this.http.CityIds.push(new_data.id),
                                                       //add CityID array to local storage since we added new value to it on the line above
                                                       localStorage.setItem('City ID',JSON.stringify(this.http.CityIds));
                                                      }, 
                                                      (error) => alert(error.error.message));
   
  }
  keyprevent(e){
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    console.log(keyCode);
    if (keyCode > 47 && keyCode < 58){
        e.preventDefault();
    }
}
}
