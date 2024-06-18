import { Component } from '@angular/core';
import { FormBuilder ,FormGroup,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent  {
  form:FormGroup
  
  filename: string='';
  roles=[{name:'admin'},{name:'demandeur',},{name:'planificateur'},{name:'Approbation'},{name:'Commission'}]
  show: boolean=false;
  message: string='';
  constructor(private fb:FormBuilder,private userService:UserService){
  
      this.form = this.fb.group({
        name:this.fb.group({
          name: [null, Validators.required],
          role: [null],
          // picture: [null],
        }),
        contact:this.fb.group({
          email: [null, [Validators.email,Validators.required]],
        }),
        password:this.fb.group({
          password: [null, Validators.required],
          comfrimpassword:[null,Validators.required],
        }),
    
      
      
      });
    
  }
  ngOnInit(): void {
    
  }
  submit(){
let user= new User()
user.name=this.form.value?.name.name
user.role=this.form.value?.name.role
user.email=this.form.value?.contact.email
user.password=this.form.value?.password.password
this.userService.addUser(user).subscribe(data=>{console.log(data)
  this.show=true
  this.message=' votre utilsateurs'+user.name+' étè crée avec success'
  this.form.reset()
})
  }
}
