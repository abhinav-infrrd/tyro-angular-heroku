import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { AuthErrorService } from './auth-error.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private autherror: AuthErrorService) {
  }

  login(email: string, password: string) {
    return this.http.post("https://tyroapis.herokuapp.com/user/login",
      {
        email: email,
        password: password
      },
      { observe: 'response' })
      .pipe(tap(resData => {
        localStorage.setItem('token', resData.headers.get("Authorization"));

      }), catchError(errorResp => {
        return throwError(this.autherror.errorHandling(errorResp.error["message"]));
      })
      );
  }

  signup(signupData) {
    return this.http.post("https://tyroapis.herokuapp.com/user/signup",
      signupData,
      { observe: 'response' }
    )
      .pipe(catchError(errorResp => {
        return throwError(this.autherror.errorHandling(errorResp.error["message"]));
      }), tap(resData => {
        localStorage.setItem('token', resData.headers.get("Authorization"));
      })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
