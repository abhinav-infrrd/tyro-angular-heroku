import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Common } from './common';

@Injectable({
  providedIn: 'root'
})
export class RecentPostsService {
  constructor(private http: HttpClient, private url : Common) { }

  fetchRecent() {
    return this.http.get(this.url.baseUrl + 'article/' + 'feed/');
  }
}
