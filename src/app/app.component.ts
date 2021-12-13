import { Component } from '@angular/core';
import { tram } from './interfaces/tramInterface';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private app_service: AppService) {}
  public title = 'polystart-coding-test';
  public trams: tram[] = [];
  public tramsFound: boolean = false;
  public noError = true;
  public errorMessage = '';
  ngOnInit() {}

  getTramsData() {
    this.app_service.getApiData().subscribe(
      (data: any) => {
        this.trams = data.ResponseData.Trams;
        this.tramsFound = true;
      },
      (error) => {
        this.tramsFound = false;
        this.trams = [];
        this.noError = false;
        this.errorMessage = `OOPS Something went Error: ${error.statusText}`;
        console.log(error);
      }
    );
  }
}
