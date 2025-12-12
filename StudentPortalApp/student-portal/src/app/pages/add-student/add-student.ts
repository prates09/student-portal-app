import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css',
})
export class AddStudent implements OnInit {
  studentForm!: FormGroup;

  classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9'];
  subjects = ['Maths', 'Science', 'English', 'History', 'Geography','Computer Science'];

  constructor(
    private readonly fb: FormBuilder,
    private readonly studentService: StudentService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      hasHobby: [false],
      hobby: [''],
      favoriteSubject: [''],
    });

    this.studentForm.get('hasHobby')!.valueChanges.subscribe((hasHobby) => {
      if (!hasHobby) {
        this.studentForm.get('hobby')!.reset('');
      }
    });
  }

  
  get name() { return this.studentForm.get('name')!; }
  get classCtrl() { return this.studentForm.get('class')!; }
  get gender() { return this.studentForm.get('gender')!; }
  get hasHobbyCtrl() { return this.studentForm.get('hasHobby')!; }

  
  get classMessage(): string | null {
    const selected = this.classCtrl.value;
    if (!selected) return null;

    if (selected === 'Class 9') {
      return 'You will appear in board exams soon. All the Best !!';
    } else if (selected === 'Class 6') {
      return 'Welcome to middle school!';
    } else {
      return 'Education and hobby go hand in hand!';
    }
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    const value = this.studentForm.value;

    const newStudent: Student = {
      name: value.name,
      class: value.class,
      gender: value.gender,
      hasHobby: value.hasHobby,
      hobby: value.hasHobby ? value.hobby : 'No hobby',
      favoriteSubject: value.favoriteSubject,
    };

    this.studentService.addStudent(newStudent);
    this.router.navigate(['/']);
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
