import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskCreateComponent } from './task-create/task-create.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'create-task',
    component: TaskCreateComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
