import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  notifications: string[] = [];
  isDarkMode = false;

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.notifications$.subscribe(n => {
      this.notifications = n;
    });

    // Load saved preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  }

  removeNotification(index: number) {
    this.studentService.removeNotification(index);
  }

  toggleDarkMode(event: MatSlideToggleChange) {
    this.isDarkMode = event.checked;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}
