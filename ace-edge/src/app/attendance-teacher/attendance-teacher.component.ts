import { Component, OnInit } from '@angular/core';
import { SchoolClass } from '../core';

@Component({
  selector: 'app-attendance-teacher',
  templateUrl: './attendance-teacher.component.html',
  styleUrls: ['./attendance-teacher.component.scss']
})
export class AttendanceTeacherComponent implements OnInit {

  constructor() {
    this.date=new Date();
    this.date.setHours(0,0,0);
    this.class = <SchoolClass>{
      section:'A',
      standard:4
    };
  }

  date:Date;
  class:SchoolClass;
  ngOnInit() {
  }

}
