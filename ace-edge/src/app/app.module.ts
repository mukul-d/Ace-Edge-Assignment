import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AttendanceTeacherComponent } from './attendance-teacher/attendance-teacher.component';
import { AttendanceAdminComponent } from './attendance-admin/attendance-admin.component';

import { CoreModule } from './core/core.module';
import { AttendanceTableComponent } from './attendance-table/attendance-table.component';
import { MatModule } from './core/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      AttendanceTeacherComponent,
      AttendanceAdminComponent,
      AttendanceTableComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatModule,
      CoreModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
