import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService{
  API_KEY:any = 'aaf75a54a378ac35f7fce5a714814cb7';
  CityIds:any[]= [703448,1850147,5128638];
  DEFAULT_API_URL:any = `https://api.openweathermap.org/data/2.5/group?id=${this.CityIds}&units=metric&appid=${this.API_KEY}`;
 
  constructor(private http:HttpClient) { }
  defaultData(){
    if(localStorage.getItem('City ID')){
      let data = JSON.parse(localStorage.getItem('City ID'));
      return this.http.get<any>(`https://api.openweathermap.org/data/2.5/group?id=${data}&units=metric&appid=${this.API_KEY}`);
    }
    else{
      return this.http.get<any>(this.DEFAULT_API_URL);
    }
  }
  newCity(x){
    let NEW_CITY_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${x}&units=metric&appid=${this.API_KEY}`;
    return this.http.get<any>(NEW_CITY_API_URL);
    
  }
}
