import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  role: any;
  userId: number=0
  user: any;
  constructor(private  userService :UserService,private router: Router, ){}
  ngOnInit(): void { 
    this.role = this.getCookie('role');
    this.userId=Number(this.getCookie('userId'))
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data
      console.log(data)
    })
console.log(this.role);
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
logout() {
  this.router.navigate(['/auth/login']);
 var allCookies = document.cookie.split(';');
  // allCookies.forEach(element => {
  //   if (!element.includes('role') && !element.includes('userId') && !element.includes('email') && !element.includes('token')) {
  //     document.cookie = element + "=;expires=" + new Date(0).toUTCString();
  //   }
  // });
  this.deleteAllCookies()
  allCookies.forEach(cookie => {
    const cookieName = cookie.split('=')[0].trim();
    if (!['role', 'userId', 'email', 'token'].includes(cookieName)) {
      // this.deleteCookie(cookieName);
    }
  });
}
// deleteCookie(name: string) {
//   document.cookie = name + '=; Max-Age=-99999999;';
// }
deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
}
