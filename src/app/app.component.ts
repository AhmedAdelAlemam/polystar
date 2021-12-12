import { Component } from '@angular/core';
import { tram } from './interfaces/interface';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private app_service: AppService) {}
  title = 'polystart-coding-test';
  trams: tram[] = [];
  ngOnInit() {
    this.app_service.getApiData().subscribe(
      (data: any) => {
        this.trams = data.ResponseData.Trams;
        console.log(this.trams);
      },
      (error) => console.log(error)
    );
  }
}
