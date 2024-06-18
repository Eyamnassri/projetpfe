import { Component ,OnInit} from '@angular/core';

import { UserService } from './user.service';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{
  userp=2
  id=3
  showAlert: boolean=false;
  data: any;
  name="Hello"
  users: any;

  constructor( private UserService:UserService ){
   
   

  }
 
  ngOnInit(): void {
   this.getAllUser()
  }
getAllUser(){
  this.UserService.getUserAll().subscribe(data=>{
    console.log((data))
    this.users=data[0]
  })
}
 
  delete(id:number){
    this.showAlert= true; 
   this.userp=id

  }
  closeAction(){
    this.showAlert=false
  }
  saveAction(){
    this.showAlert=false
 this.getAllUser()
  }
}
