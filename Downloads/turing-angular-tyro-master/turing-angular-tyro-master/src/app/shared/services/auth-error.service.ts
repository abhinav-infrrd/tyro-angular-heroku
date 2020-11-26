import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthErrorService {

  constructor() { }

  errorHandling(message: any) {
    let resp: string = null;
    switch (message) {
      case "UNAUTHORIZED": 
        resp = "Invalid details";
        break;

      case "CONFLICT":
        resp = "Details exist";
        break;

      default:
        resp = "Invalid Details";
        break;
    }
    return resp;

  }
}