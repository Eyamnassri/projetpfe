import { Component, OnInit } from '@angular/core';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  clrVerticalNavCollapsed=true
  showMenu: boolean = false;
  constructor( private router: Router){
    
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        if (event.url === '/auth/login'  )  {
          this.showMenu = false;
        } else {
          this.showMenu = true;
        }
      }
    });
  
  }
ngOnInit(): void {
  const userId = this.getCookie('userId');
  const token = this.getCookie('token');
  const email = this.getCookie('email');
  const role = this.getCookie('role');

  // If any required cookie is missing, redirect to the login page
  if (!userId || !token || !email || !role) {
    this.router.navigate(['/auth/login']);
  }
}
getCookie(name:any) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');

  for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
          return cookieValue;
      }
  }

  return null;
}
}

