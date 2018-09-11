import { Component } from '@angular/core';
import { PersistforecastService } from '../persistforecast.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  // adding this parameter to the constructor simultaneously creates a private property
  // and injects an instance of the service
  constructor(private persistforecastservice: PersistforecastService, private http: HttpClient) { }

  public currentCount = 0;

  public forecastvalue = "";

  public forecasts: WeatherForecast[];
  public settings: Setting[];

  public getWeatherforecast() {
    this.http.get<WeatherForecast[]>("https://localhost:44380/" + 'api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));

    //this.forecastvalue = JSON.stringify(this.forecasts[0]);
  }

  public getSettings() {
    this.http.get<Setting[]>("https://localhost:44380/" + 'api/Settingss/Settings').subscribe(result => {
      this.settings = result;
      this.saveSettings(result);
    }, error => console.error(error));

    //this.forecastvalue = JSON.stringify(this.forecasts[0]);
  }

  public saveSettings(result: Setting[]) {
    this.persistforecastservice.saveSettings(result);
  }

  public setStorage() {
    this.persistforecastservice.set();
  }

  public getStorage() {
    this.persistforecastservice.get();
  }

  public incrementCounter() {
    this.currentCount++;
  }

}

interface WeatherForecast {
  dateFormatted: string;
  dayOfWeek: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Setting {
  user: string;
  filterOn: string[];
  groupingColumns: string[];
  orderByColumns: string[];
}
