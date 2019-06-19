import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogComponent } from './log/log.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { RegisterComponent } from './register/register.component';
import { NewListComponent } from './new-list/new-list.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'Log', component:LogComponent},
  {path:'list coupon',component:ListComponent},
  {path:'admin',component:AdminComponent},
  {path:'company',component:CompanyComponent},
  {path:'register',component:RegisterComponent},
  {path:'new-list',component:NewListComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
