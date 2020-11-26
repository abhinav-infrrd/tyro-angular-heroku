import { Injectable } from '@angular/core';
import { AuthErrorService } from './auth-error.service';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Common } from './common';


@Injectable({
  providedIn: 'root'
})
export class TrendingPostService {
  constructor(private http: HttpClient, private autherror: AuthErrorService, private url : Common) { }


  fetchTrend() {
    return this.http.get(this.url.baseUrl + 'article/' + 'trending/');
  }

}

