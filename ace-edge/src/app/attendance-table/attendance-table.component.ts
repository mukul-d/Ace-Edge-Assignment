import { Component, OnInit, Input } from "@angular/core";
import { Attendance, AceEdgeService, SchoolClass } from "../core";
import { Observable, BehaviorSubject, Subject } from "rxjs";

export type AttendanceDisplayMode = "teacher" | "admin";

@Component({
  selector: "app-attendance-table",
  templateUrl: "./attendance-table.component.html",
  styleUrls: ["./attendance-table.component.scss"],
})
export class AttendanceTableComponent implements OnInit {
  attendances: Attendance[];
  displayedColumns = [];
  admindisplayedColumns = [
    "SrNo",
    "AdmnNo",
    "Name",
    "GrdName",
    "AttStatus",
    "Remarks",
  ];
  teacherdisplayedColums = [
    "RollNo",
    "Name",
    "GrdName",
    "AttStatus",
    "Remarks",
  ];

  //#region displaymode property
  private _displayMode = new BehaviorSubject<AttendanceDisplayMode>(null);
  @Input()
  set displayMode(value) {
    this._displayMode.next(value);
  }

  get displayMode() {
    return this._displayMode.getValue();
  }
  //#endregion
  @Input()
  class :SchoolClass;
  @Input()
  date :Date;

  constructor(private appSevice: AceEdgeService) {
    5;
  }

  ngOnInit() {
    if(this.date!=null && this.class!=null)
    {
      this.updateTable();
    }
    this._displayMode.subscribe((mode) => {
      switch (mode) {
        case "admin":
          this.displayedColumns = this.admindisplayedColumns;
          break;
        case "teacher":
          this.displayedColumns = this.teacherdisplayedColums;
          break;
        default:
          this.displayedColumns = [];
      }
    });

  }
  public updateTable() {
    this.attendances = this.appSevice.getAttendanceByDateAndClass(
      this.date,
      this.class
    );
  }
  updateAttendance() {
    this.appSevice.updateAttendance(this.attendances);
  }
}
