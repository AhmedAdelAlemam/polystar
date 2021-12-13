import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../models/api/api';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  private key: string = '1fa34ecc451f4336ad956cc8a3d7f16f';

  private siteid: Function = (num: number) => {
    return num;
  };

  private timeWindow: Function = (num: number) => {
    return num;
  };

  getApiData() {
    return this.http.get(
      `${baseUrl}?key=${this.key}&siteid=${this.siteid(
        1555
      )}&timewindow=${this.timeWindow(60)}`
    );
  }
}
