import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationComponent} from './authentication/authentication.component';

const routes: Routes = [
{path:'admin',component:EmployeeComponent},
{path:'employee',component:AdminComponent},
{path:'**',component:LoginComponent},
// {path: '', redirectTo:'login',pathMatch:'full'},
// {path: 'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
