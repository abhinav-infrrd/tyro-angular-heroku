import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../models/topic.model';
import { AuthService } from './auth.service';
import { Common } from './common';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient, private authService: AuthService, private url: Common) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.url.baseUrl + 'topics/');
  }

  onFollowTopic(id: string) {
    return this.http.put(this.url.baseUrl + 'topic/follow/' + id,
      {
        id
      },
      { observe: 'response' });
  }

  onUnfollowTopic(id: string) {
    return this.http.put(this.url.baseUrl + 'topic/unfollow/' + id,
      {
        id
      },
      { observe: 'response' });
  }

}
