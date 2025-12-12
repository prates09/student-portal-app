export interface Student {
  name: string;
  class: string;            
  gender: 'Male' | 'Female';
  hasHobby: boolean;
  hobby?: string;
  favoriteSubject?: string;
}
