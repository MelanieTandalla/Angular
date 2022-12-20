import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';



const routes :Routes =[
  {path:'dashboard',component:DashboardComponent},
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductComponent},

  
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  //{path:'**',component:NoFoundComponent},


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
