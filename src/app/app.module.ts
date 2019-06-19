import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LogComponent } from './log/log.component';
import { ListComponent } from './list/list.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { RegisterComponent } from './register/register.component';
import { ImageAdminComponent } from './image-admin/image-admin.component';
import { ImgecompanyComponent } from './imgecompany/imgecompany.component';
import { NewListComponent } from './new-list/new-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    HomeComponent,
    AboutComponent,
    LogComponent,
    ListComponent,
    AdminComponent,
    CompanyComponent,
    RegisterComponent,
    ImageAdminComponent,
    ImgecompanyComponent,
    NewListComponent
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
