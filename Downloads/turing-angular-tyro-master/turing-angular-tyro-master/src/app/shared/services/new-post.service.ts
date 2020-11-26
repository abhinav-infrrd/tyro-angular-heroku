import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { AuthErrorService } from './auth-error.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Common } from './common';

@Injectable({
    providedIn: 'root'
})
export class NewPostService {

    post: Post = {
        title: "",
        blog: ""
    };
    constructor(private http: HttpClient, private autherror: AuthErrorService, private url : Common) {

    }

    addPost(title: string, blog: string) {
        this.post.title = title;
        this.post.blog = blog;
    }

    sendNewPost(title: string, topics: string[], content: string) {
        return this.http.post(this.url.baseUrl + 'article/' + 'createPost/',
            {
                title,
                topics,
                content
            },
            { observe: 'response' });
    }

}