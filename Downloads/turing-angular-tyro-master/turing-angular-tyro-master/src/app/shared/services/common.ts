import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Common{
    baseUrl : string = "https://tyroapis.herokuapp.com/";
}