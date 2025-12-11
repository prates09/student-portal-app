import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

import { StudentList } from './pages/student-list/student-list';
import { AddStudent } from './pages/add-student/add-student';

const routes: Routes = [
  { path: '', component: StudentList },
  { path: 'add', component: AddStudent },
  { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],
};
