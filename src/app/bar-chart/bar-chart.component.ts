import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js/dist/types/index';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
presentCount = 0;
  absentCount = 0;
  totalCount = 0;

  barData!: ChartData<'bar'>;
  barType: 'bar' = 'bar';   // ✅ Narrowed type
  barOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0  // ✅ ensures whole numbers only
        }
      }
    }
  };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(students => {
      this.presentCount = students.filter(s => s.present).length;
      this.absentCount = students.filter(s => !s.present).length;
      this.totalCount = students.length;

      this.barData = {
        labels: ['Present', 'Absent', 'Total'],
        datasets: [
          {
            label: 'Students',
            data: [this.presentCount, this.absentCount, this.totalCount],
            backgroundColor: ['#4caf50', '#f44336', '#2196f3']  // green, red, blue
          }
        ]
      };
    });
  }
}
