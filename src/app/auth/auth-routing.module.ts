import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundComponent } from '../no-found/no-found.component';


const routes :Routes =[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'**',component:NoFoundComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
