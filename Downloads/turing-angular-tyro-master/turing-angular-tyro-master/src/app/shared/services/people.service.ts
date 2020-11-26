import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';
import { AuthService } from './auth.service';
import { Common } from './common';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient, private authService: AuthService, private url: Common) {

  }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.url.baseUrl + 'users/');
  }

  getFewPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.url.baseUrl + 'users/?count=2');
  }

  onFollow(id: string) {
    return this.http.put(this.url.baseUrl + 'user/follow/' + id,
      {
        id
      },
      { observe: 'response' });
  }

  onUnfollow(id: string) {
    return this.http.put(this.url.baseUrl + 'user/unfollow/' + id,
      {
        id
      },
      { observe: 'response' });
  }
}
