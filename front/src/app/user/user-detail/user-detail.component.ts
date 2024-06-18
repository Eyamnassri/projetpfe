import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  implements OnInit{
  id: number=0;
  user:User=new User()
  constructor(private userService:UserService ,private activatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.getUser(this.id)

  })
  }
  getUser(id:number){
    this.userService.getUserById(id).subscribe(data=>{
      console.log(data)
      this.user=data
    })
  }
}
