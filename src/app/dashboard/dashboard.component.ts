import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;   // Fetch students dynamically
    });
  }

}
