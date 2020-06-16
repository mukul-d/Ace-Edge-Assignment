import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceAdminComponent } from './attendance-admin/attendance-admin.component';
import { AttendanceTeacherComponent } from './attendance-teacher/attendance-teacher.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'attendance-admin',component:AttendanceAdminComponent},
  {path:'attendance-teacher',component:AttendanceTeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
