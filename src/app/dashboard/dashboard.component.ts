import { Component, OnInit } from '@angular/core';

//importing coronaservice to call the api data.
import { CoronaServiceService } from '../corona-service.service';

@Component({
  selector: 'app-dashboard',
  template: 
  `
  <div class="container-fluid">
    <div class="row">
      <div class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-header">
          <a href="#" class="navbar-brand"><img src="assets/images/coronavirus.png" id="logo"></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarcollapse" aria-expanded="false" id="button" (click)="shownav()">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarcollapse" [ngClass]="{'show':hide}">
          <ul class="nav navbar-nav navbar-right">
            <li class="text-center"><a href="#world">WORLD</a></li>
            <li class="text-center"><a href="#covid19">ABOUT</a></li>
            <li class="text-center"><a href="#india">INDIA</a></li>
            <li class="text-center"><a href="#symptoms">SYMPTOMS</a></li>
            <li class="text-center"><a href="#prevention">PREVENTION</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="container" id="top">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src="https://tenor.com/view/covid-covid-cute-corona-go-away-cheeky-corona-mr-covid-gif-16771959.gif" id="gif1">&nbsp;
        <label id="safe">Stay At Home...Stay Safe..<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stay Positive..Fight Corona!!</label>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src="https://tenor.com/view/coronavirus-covid19-covid-do-the5-do-the-five-gif-16678450.gif" id="gif2">
      </div>
    </div>

    <div class="row">
      <h3 class="text-center" id="globalupdate">GLOBAL TOTAL UPDATE</h3><br><br>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <h4 class="text-center global">Total Confirmed</h4>
        <button class="btn btn-block btn-info globalbtn">{{coronaData.Global.TotalConfirmed}}</button>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 class="text-center global">Total Recovered</h4>
          <button class="btn btn-block btn-success globalbtn">{{coronaData.Global.TotalRecovered}}</button>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <h4 class="text-center global">Total Deaths</h4>
          <button class="btn btn-block btn-danger globalbtn">{{coronaData.Global.TotalDeaths}}</button>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <h4 class="text-center global">Last Updated</h4>
        <button class="btn btn-block btn-warning globalbtn">{{coronaData.Date}}</button>
      </div>
    </div>
  </div><br><br><br>

  <div class="container" id="worldcontainer">
    <div class="row">
      <h3 class="text-center" id="world">WORLD DAILY UPDATE</h3><br><br>
    </div><br>

    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" *ngFor="let x of coronaData.Countries | paginate:{itemsPerPage:8, currentPage:p}">
        <div class="panel panel-success">
          <div class="panel-heading">
            <h5 class="text-center countryfont">{{x.Country}}</h5>
          </div>
          <div class="panel-body">
            <h5 class="text-center countryfont1">Country Code = {{x.CountryCode}}</h5>
            <h5 class="text-center countryfont1">Total Cases = {{x.TotalConfirmed}}</h5>
            <h5 class="text-center countryfont1">New Cases = {{x.NewConfirmed}}</h5>
            <h5 class="text-center countryfont1">Total Recovered = {{x.TotalRecovered}}</h5>
            <h5 class="text-center countryfont1">New Recovered = {{x.NewRecovered}}</h5>
            <h5 class="text-center countryfont1">Total Deaths = {{x.TotalDeaths}}</h5>
            <h5 class="text-center countryfont1">New Deaths = {{x.NewDeaths}}</h5>
          </div>
          <div class="panel-footer">
            <h5 class="text-center countryfont1">Updated On<br><br>{{x.Date}}</h5>
          </div>
        </div>
      </div>
    </div>

    <pagination-controls class="text-center" (pageChange)="p=$event"></pagination-controls>
  </div><br><br><br>

  <div class="container">
    <div class="row">
      <h3 class="text-center" id="covid19">ABOUT COVID-19 ??</h3><br><br>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://tenor.com/view/corona-virus-corona-dr-ezekiel-fights-the-corona-virus-dr-ezekiel-corona-covid19-gif-16569115.gif" id="coronaleft">
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <p id="coronaright">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and require treatment. 
            Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. 
        </p>
      </div>
    </div>
  </div><br><br><br>

  <div class="container">
    <div class="row">
      <h3 class="text-center" id="india">INDIA DAILY UPDATE</h3><br><br>
    </div><br>

    <div class="row">
      <div class="col-md-12">
        <table class="table table-bordered table-hover">
          <thead>
            <tr class="active">
              <th class="text-center indiatable">STATE</th>
              <th class="text-center indiatable">Cases</th>
              <th class="text-center indiatable">Recovered</th>
              <th class="text-center indiatable">Deaths</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let x of indiaData.statewise">
              <td class="text-center indiadata info">{{x.state}}</td>
              <td class="text-center indiadata warning">{{x.confirmed}}</td>
              <td class="text-center indiadata success">{{x.recovered}}</td>
              <td class="text-center indiadata danger">{{x.deaths}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div><br><br><br>

  <div class="container">
    <div class="row">
      <h3 class="text-center" id="symptoms">CORONAVIRUS SYMPTOMS</h3><br><br>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/cough.png" class="symptoms2">
        <h5 class="text-center symptoms3">Dry Cough</h5>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/difficultbreathing.png" class="symptoms2">
        <h5 class="text-center symptoms3">Difficulty In Breathing</h5>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/fever.png" class="symptoms2">
        <h5 class="text-center symptoms3">High Fever</h5>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/runnynose.png" class="symptoms2">
        <h5 class="text-center symptoms3">Running Nose</h5>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/sneeze.png" class="symptoms2">
        <h5 class="text-center symptoms3">Sneezing Problem</h5>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/sorethroat.png" class="symptoms2">
        <h5 class="text-center symptoms3">Sore Throat Symptom</h5>
      </div>
    </div>
  </div><br><br><br>

  <div class="container" id="preventioncontainer">
    <div class="row">
      <h3 class="text-center" id="prevention">CORONAVIRUS PREVENTION</h3><br><br>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/newsupdate.png" class="symptoms2">
        <h4 class="text-center symptoms3">Stay updated by watching news channels and reading news on internet</h4>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/sick.png" class="symptoms2">
        <h4 class="text-center symptoms3">If you are feeling sick, contact doctor as soon as possible</h4>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/mask.png" class="symptoms2">
        <h4 class="text-center symptoms3">If going out cover your mouth and nose with a cloth or mask</h4>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/distance.png" class="symptoms2">
        <h4 class="text-center symptoms3">Avoid close contact with people and maintain social distancing</h4>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/home.png" class="symptoms2">
        <h4 class="text-center symptoms3">Stay at home and self-isolate from others if you feel unwell</h4>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <img src="assets/images/wash.png" class="symptoms2">
        <h4 class="text-center symptoms3">Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub</h4>
      </div>
    </div>
  </div><br><br><br>

  <div class="container-fluid row7">
    <div class="row"><br><br><br>
      <div class="col-lg-6 col-md-6 col-xs-12">  
        <div class="col-md-12">
          <u style="color: yellow;">
            <h3 style="color: white; font-weight: bold;">About</h3>
          </u><br>
          <p style="color: white;">
            Designed and Developed by Akshay Pal.<br>
          </p><br>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-xs-12">
        <div class="col-md-12">
          <u style="color: yellow;">
            <h3 style="color: white; font-weight: bold;">Contact</h3>
          </u><br>
          <div class="form-group">
            <div class="col-md-2">
              <i class="fa fa-2x fa-envelope" style="color: yellow; padding-top: 15px;"></i>
            </div>
            <div class="col-md-10">
              <h4 style="color: white; font-weight: bold;">Email</h4>
              <p style="color: white;">
                Akshaypal.ak007@gmail.com
              </p>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-2">
              <i class="fa fa-2x fa-map-marker" style="color: yellow; padding-top: 15px;"></i>
            </div>
            <div class="col-md-10">
              <h4 style="color: white; font-weight: bold;">Address</h4>
              <p style="color: white;">
                #282/c.K R Garden, Bangalore-560017
              </p>
            </div>
          </div>
          <div class="form-group">
            <div class="col-md-2">
              <i class="fa fa-2x fa-mobile" style="color: yellow; padding-top: 15px;"></i>
            </div>
            <div class="col-md-10">
              <h4 style="color: white; font-weight: bold;">Phone</h4>
              <p style="color: white;">
                +91-8892735073
              </p>
            </div>
          </div>
        </div>
      </div>
    </div><br><br>
  </div>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:CoronaServiceService) { }

  ngOnInit() {
    this.setWorldApi();
    this.setIndiaApi();
  }

  hide = false

  shownav()
  {
    this.hide = !this.hide;
  }

  coronaData;
  newData;
  indiaData;
  //writing function to get api data.
  setWorldApi(){
    this.service.getWorldApi().subscribe(response=>{
      this.coronaData = response as string[];
    })
  }

  setIndiaApi(){
    this.service.getIndiaApi().subscribe(response=>{
      this.indiaData = response as string[];
    })
  }

  p:number = 1;

}
