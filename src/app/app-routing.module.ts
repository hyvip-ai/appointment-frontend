import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';

import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { CancelrequestComponent } from './cancelrequest/cancelrequest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditformComponent } from './editform/editform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [ {
  path:'', redirectTo:'register',pathMatch:'full'
}
,
{
  path:'register',component:RegisterComponent
},

{
  path:'dashboard',component:DashboardComponent
},
{
  path:'login',component:LoginComponent
},
{
  path:'booking',component:BookappointmentComponent
},
{
  path:'administration',component:AdministrationComponent
},
{
  path:'administration/cancel',component:CancelrequestComponent
},
{
  path:'editform/:id' , component:EditformComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
