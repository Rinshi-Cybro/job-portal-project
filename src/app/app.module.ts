import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { VacancyComponent } from './component/vacancy/vacancy.component';
import { FeedbackComponent } from './adminComponents/feedback/feedback.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TableComponent } from './adminComponents/table/table.component';
import { TokeniterceptorService } from './service/tokeniterceptor.service';
import { CommonComponent } from './component/common/common.component';
import { AdminHomeComponent } from './adminComponents/admin-home/admin-home.component';
import { AdminNavComponent } from './adminComponents/admin-nav/admin-nav.component';
import { AnnouncementComponent } from './adminComponents/announcement/announcement.component';
import { JobpostComponent } from './adminComponents/jobpost/jobpost.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NotificationsComponent,
    VacancyComponent,
    FeedbackComponent,
    NavbarComponent,
    TableComponent,
    CommonComponent,
    AdminHomeComponent,
    AdminNavComponent,
    AnnouncementComponent,
    JobpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokeniterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
