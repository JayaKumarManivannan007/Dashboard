import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John', present: false },
    { id: 2, name: 'Emma', present: false },
    { id: 3, name: 'Alex', present: false },
    { id: 4, name: 'JK', present: false }
  ];

  private studentsSubject = new BehaviorSubject<Student[]>(this.students);
  students$ = this.studentsSubject.asObservable();

  private notificationsSubject = new BehaviorSubject<string[]>([]);
  notifications$ = this.notificationsSubject.asObservable();

  // ✅ Add notification
  private addNotification(message: string) {
    const current = this.notificationsSubject.value;
    this.notificationsSubject.next([...current, message]);
  }

  // ✅ Remove notification by index
  removeNotification(index: number) {
    const current = [...this.notificationsSubject.value];
    current.splice(index, 1);
    this.notificationsSubject.next(current);
  }

  getStudents() {
    return this.students$;
  }

  updateAttendance(id: number, present: boolean) {
    this.students = this.students.map(s =>
      s.id === id ? { ...s, present } : s
    );
    this.studentsSubject.next(this.students);
    this.addNotification(`Attendance updated for ${id}`);
  }

  addStudent(name: string) {
    const newStudent: Student = {
      id: this.generateId(),
      name,
      present: false
    };
    this.students = [...this.students, newStudent];
    this.studentsSubject.next(this.students);
    this.addNotification(`Student "${name}" added`);
  }

  deleteStudent(id: number) {
    const student = this.students.find(s => s.id === id);
    this.students = this.students.filter(s => s.id !== id);
    this.studentsSubject.next(this.students);
    this.addNotification(`Student "${student?.name}" deleted`);
  }

  updateStudent(id: number, name: string) {
    const oldStudent = this.students.find(s => s.id === id);
    this.students = this.students.map(s =>
      s.id === id ? { ...s, name } : s
    );
    this.studentsSubject.next(this.students);
    this.addNotification(`Student "${oldStudent?.name}" updated to "${name}"`);
  }

  private generateId(): number {
    return this.students.length > 0
      ? Math.max(...this.students.map(s => s.id)) + 1
      : 1;
  }
}
