import { Injectable } from '@angular/core';

//importing HttpClient to fetch api data.
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaServiceService {

  constructor(private obj:HttpClient) { }

  //writing function to get json api.
  getWorldApi(){
    var url ="https://api.covid19api.com/summary";  //api to get country data.
    return this.obj.get(url);
  }

  getIndiaApi(){
    var url = "https://api.covid19india.org/data.json";    //api to get india data.
    return this.obj.get(url);
  }
}
