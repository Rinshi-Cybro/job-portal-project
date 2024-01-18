import { AdminGuard } from './guard/admin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { FeedbackComponent } from './adminComponents/feedback/feedback.component';
import { HomeComponent } from './component/home/home.component';
import { VacancyComponent } from './component/vacancy/vacancy.component';
import { TableComponent } from './adminComponents/table/table.component';
import { AdminHomeComponent } from './adminComponents/admin-home/admin-home.component';
import { AnnouncementComponent } from './adminComponents/announcement/announcement.component';
import { JobpostComponent } from './adminComponents/jobpost/jobpost.component';
import { NotificationsComponent } from './component/notifications/notifications.component';

import { AuthGuard } from './guard/auth.guard';
import { UserGuard } from './guard/userguard.guard';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'contactus',component:ContactusComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'feedback',component:FeedbackComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'vacancy',component:VacancyComponent,canActivate:[AuthGuard,UserGuard]},
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'table',component:TableComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'adminhome',component:AdminHomeComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'announcement',component:AnnouncementComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'jobpost',component:JobpostComponent,canActivate:[AuthGuard,AdminGuard]},
  {path:'notifications',component:NotificationsComponent,canActivate:[AuthGuard,UserGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
