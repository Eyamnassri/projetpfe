import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth/auth-routing.module';


@NgModule({
  declarations: [ LoginComponent,SignInComponent],
  imports: [
    CommonModule,ClarityModule,ClrIconModule,FormsModule,ReactiveFormsModule, AuthRoutingModule,
  ],
  exports:[LoginComponent,SignInComponent]
})
export class AuthModule { }
