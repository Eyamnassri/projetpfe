import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignInComponent } from '../sign-in/sign-in.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'SingIn',component:SignInComponent},
  { path: '**', redirectTo: 'auth/login' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
 
