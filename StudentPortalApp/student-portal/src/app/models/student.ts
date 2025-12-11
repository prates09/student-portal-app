export interface Student {
  name: string;
  class: string;            // "Class 6", "Class 7", "Class 8", "Class 9"
  gender: 'Male' | 'Female';
  hasHobby: boolean;
  hobby?: string;
  favoriteSubject?: string;
}
