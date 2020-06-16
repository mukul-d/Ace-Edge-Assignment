import { SchoolClass } from './school-class';

export interface Student {
  rollNo:number;
  class:SchoolClass;
  firstName:String;
  lastName:String;
  guardianName:String;
  middleName?:String;
  parentsNumber:number;
  admissionNumber:number;
}
