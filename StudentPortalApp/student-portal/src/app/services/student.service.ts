import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  
  private readonly students: Student[] = [
    {
      name: 'Pratyush Singh',
      class: 'Class 9',
      gender: 'Male',
      hasHobby: true,
      hobby: 'Cricket',
      favoriteSubject: 'Maths'
    },
    {
      name: 'Diya Sen',
      class: 'Class 6',
      gender: 'Female',
      hasHobby: true,
      hobby: 'Chess',
      favoriteSubject: 'English'
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push({ ...student });
  }
}
