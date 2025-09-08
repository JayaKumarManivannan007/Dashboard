import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  students: Student[] = [];
  newStudentName = '';
  editingId: number | null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  markPresent(student: Student) {
    this.studentService.updateAttendance(student.id, true);
  }

  markAbsent(student: Student) {
    this.studentService.updateAttendance(student.id, false);
  }

  addStudent() {
    if (this.newStudentName.trim()) {
      this.studentService.addStudent(this.newStudentName.trim());
      this.newStudentName = '';
    }
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id);
  }

  startEdit(student: Student) {
    this.editingId = student.id;
    this.newStudentName = student.name;
  }

  saveEdit() {
    if (this.editingId !== null && this.newStudentName.trim()) {
      this.studentService.updateStudent(this.editingId, this.newStudentName.trim());
      this.editingId = null;
      this.newStudentName = '';
    }
  }

  cancelEdit() {
    this.editingId = null;
    this.newStudentName = '';
  }
}
