import { Injectable } from "@angular/core";
import { Attendance } from "..";
import { SchoolClass, Student, Section } from "../models";

@Injectable({
  providedIn: "root",
})
export class AceEdgeService {
  private attendances: Attendance[] = [];
  private students: Student[] = [];
  private classes: SchoolClass[] = [];
  constructor() {
    this.fillData();
  }
  private fillData() {
    let SectionA: string = "A";
    for (let i = 1; i <= 10; i++) {
      for (let j = 0; j < 4; j++) {
        this.classes.push({
          section: String.fromCharCode(SectionA.charCodeAt(0) + j) as Section,
          standard: i,
        });
      }
    }
    let statuses = ['Present','Absent','Late']
    this.classes.forEach((c) => {
      for (let i = 1; i <= 5; i++) {
        let student = <Student>{
          class: c,
          firstName: "Shrey",
          lastName: "Datta",
          parentsNumber: 9283910321,
          rollNo: i,
          guardianName: "Abdul Sharma",
          admissionNumber: 2045,
        };

        this.students.push(student);

        let today: Date, start: Date;
        today = new Date();
        today.setHours(0, 0, 0, 0);
        start = new Date(today.getTime());
        start.setDate(today.getDate() - 5);

        for (let date: Date = new Date(start.getTime()), i = 1; i <= 7; i++) {
          this.attendances.push(<Attendance>{
            attendanceStatus: statuses[Math.floor(Math.random()*statuses.length)],
            student: student,
            date: new Date(date.getTime()),
          });
          date.setDate(start.getDate() + i);
        }
      }
    });

    console.dir(this.attendances);
  }
  public getStudents() {
    return this.students;
  }
  public getClasses() {
    return this.classes;
  }
  public getAttendances() {
    return this.attendances;
  }
  public getAttendanceByDateAndClass(date: Date, c: SchoolClass) {
    date.setHours(0, 0, 0, 0);
    console.dir(date.getTime());
    return [
      ...this.attendances.filter(
        (a) =>
          // (a.date.getDate() == date.getDate() && a.date.getMonth()==date.getMonth() && a.date.getFullYear()==date.getFullYear()) &&
          a.date.getTime() == date.getTime() &&
          a.student.class.section == c.section &&
          a.student.class.standard == c.standard
      ),
    ];
  }
  public updateAttendance(attendances: Attendance[]) {
    attendances.forEach((attendance) => {
     var attendanceRecord = this.attendances.find(
        (a) =>
          a.date.getTime() == attendance.date.getTime() &&
          a.student.rollNo == attendance.student.rollNo &&
          a.student.class.section == a.student.class.section &&
          a.student.class.standard == a.student.class.standard
      );
      attendanceRecord.attendanceStatus = attendance.attendanceStatus;
    });
  }
}
