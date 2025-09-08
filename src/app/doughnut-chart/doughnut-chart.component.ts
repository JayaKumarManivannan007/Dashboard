import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  presentCount = 0;
  absentCount = 0;
  totalCount = 0;

  donutData!: ChartData<'doughnut'>;
  donutType: 'doughnut' = 'doughnut';   // ✅ Narrowed type
  donutOptions: ChartOptions<'doughnut'> = { 
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      this.presentCount = students.filter(s => s.present).length;
      this.absentCount = students.filter(s => !s.present).length;
      this.totalCount = students.length;

      this.donutData = {
        labels: ['Present', 'Absent', 'Total'],
        datasets: [
          {
            data: [this.presentCount, this.absentCount, this.totalCount],
            backgroundColor: ['#4caf50', '#f44336', '#2196f3']
          }
        ]
      };
    });
  }
}
