import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit {   
  students: Student[] = [];

  constructor(private readonly  studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}
