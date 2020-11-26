import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const position = window.pageYOffset;
    if(position >= 400){
        this.isSticky = true;
    } else {
        this.isSticky = false;
    }
  }
}
