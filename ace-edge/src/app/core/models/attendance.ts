import { Student } from './Student';
import { AttendanceStatus } from './attendance-status';

export interface Attendance {
  student:Student;
  date:Date;
  attendanceStatus:AttendanceStatus;
  remarks: string;
}
