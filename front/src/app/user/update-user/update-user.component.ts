import { Component , OnInit} from '@angular/core';
import { FormBuilder ,FormGroup,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent  implements OnInit{
  user={ id:3 , name:"Eya",lastName:'Mnassri'}
  form :any
  id: number=0;
  roles=[{name:'admin'},{name:'demandeur',},{name:'planificateur'}]
  show: boolean=false;
  message: string='';

  constructor(private fb:FormBuilder,private userService:UserService ,private activatedRoute:ActivatedRoute){
  
  
  
}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
    this.id = +params['id'];
    this.getUser(this.id)

  })
  }
  getUser(id:number){
    this.userService.getUserById(id).subscribe(data=>{
      this.form = this.fb.group({
        name:this.fb.group({
          name: [data.name, Validators.required],
          role: [data.role],
        }),
        contact:this.fb.group({
          email: [data.email, [Validators.email,Validators.required]],
        }),
        password:this.fb.group({
          password: [data.password, Validators.required],
          comfrimpassword:[null,Validators.required],
        }),
    
      
      
      });
    })
  }
  submit(){
    let user= new User()
    user.name=this.form.value?.name.name
    user.role=this.form.value?.name.role
    user.email=this.form.value?.contact.email
    user.password=this.form.value?.password.password
    this.userService.PatchUser(this.id,user).subscribe(data=>{
      this.show=true
      this.message=' utilisateur étè modifie avec success'
      console.log(data)})
      }
}
