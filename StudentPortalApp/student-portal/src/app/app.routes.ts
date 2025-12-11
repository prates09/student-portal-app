import { Routes } from '@angular/router';
import { StudentList } from './pages/student-list/student-list';
import { AddStudent } from './pages/add-student/add-student';

export const routes: Routes = [
  { path: '', component: StudentList },
  { path: 'add-student', component: AddStudent },  // or 'add' if you prefer
  { path: '**', redirectTo: '' },
];
