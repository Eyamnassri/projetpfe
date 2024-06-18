import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';// 1 st step
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup
  error: boolean=false;
  message: string='';
  constructor(private  fb:FormBuilder ,private serviceUser:  UserService, private router: Router,){
    this.form=fb.group({
      // typeOption:['role',Validators.required],
      email:['email',[Validators.email,Validators.required]], 
       password:['password',Validators.required],
    })
  }
   login(){
    this.serviceUser.login(this.form.value).subscribe(
      token => {
        console.log("user",token )
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 24000 * 3600;
        now.setTime(expireTime);
        // Object.values(token)[2]
        document.cookie = "userId=" + token?.id + "; expires=" + now + ";path=/";
        document.cookie = "token=" + token?.resToken + "; expires=" + now + ";path=/";
        document.cookie = "role=" + token?.role + "; expires=" + now + ";path=/";
        document.cookie = "email=" + token?.email + "; expires=" + now + ";path=/";
      this.sotreLocalStorage(token)
        if (token.role == "admin") {
          this.router.navigateByUrl('/home');
        }
        if (token.role == "demandeur") {
          this.router.navigateByUrl('/demande');
        }
        if (token.role == "planification") {
          this.router.navigateByUrl('/cahiercharge');
        }
        if (token.role == "Approbation") {
          this.router.navigateByUrl('/cahiercharge');
        }
        if (token.role == "commission") {
          this.router.navigateByUrl('/commission');
        }
        if (token.role == "CME-CAE") {
          this.router.navigateByUrl('/demande-offer');
        }
        if (token.role == " CRA") {
          this.router.navigateByUrl('/home');
        }
        if (token.role == "planification") {
          this.router.navigateByUrl('/demande');
        }
      },error=>{
        this.error=true
        this.message="mot de passe invalide ou bien email n' existe  pas "
        this.router.navigateByUrl('/password');

      })
   }
   sotreLocalStorage(user:any){
  if(user.role!=''){
    localStorage.setItem("role",user.role)

  }
  if(user.token!=''){
    localStorage.setItem("token",user.resToken)

  }
  if(user.email!=''){
    localStorage.setItem("email",user.email)

  }
  // if(user.email!=''){
  //   localStorage.setItem("email",user.email)

  

   }
  submit(){
    
  }
}
