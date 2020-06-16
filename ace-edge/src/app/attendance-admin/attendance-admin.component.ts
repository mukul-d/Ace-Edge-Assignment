import { Component, OnInit, ViewChild } from "@angular/core";
import { SchoolClass } from "../core";
import { timingSafeEqual } from 'crypto';
import { AttendanceTableComponent } from '../attendance-table/attendance-table.component';

@Component({
  selector: "app-attendance-admin",
  templateUrl: "./attendance-admin.component.html",
  styleUrls: ["./attendance-admin.component.scss"],
})
export class AttendanceAdminComponent implements OnInit {
  constructor() {}
  @ViewChild(AttendanceTableComponent)
  attendanceTable:AttendanceTableComponent;

  date: Date;
  class: SchoolClass;
  startAt:Date;
  endAt:Date;
  ngOnInit() {
    this.date  = new Date();
    this.date.setHours(0,0,0,0);
    this.class =  <SchoolClass>{
      section: "A",
      standard:1,
    };
    this.startAt = new Date(this.date.getTime());
    this.startAt.setDate(this.date.getDate()-5);
    this.endAt = new Date(this.date.getTime());


  }
  ngAfterInit(){
    this.submit();
  }
  submit(){
    this.attendanceTable.date =this.date;
    this.attendanceTable.class=this.class;
    this.attendanceTable.updateTable();
  }
}
