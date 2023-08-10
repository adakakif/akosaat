import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import Watch from 'src/app/models/watch';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export default class WatchApiService {
  API_URL = environment.WATCH_API_URL;

  constructor(private httpClient: HttpClient) {}

  getWatches(): Observable<Watch[]> {
    return this.httpClient.get<Watch[]>(this.API_URL).pipe(shareReplay());
  }
}
