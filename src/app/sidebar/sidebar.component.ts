import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
   encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  isDarkMode = false;

  ngOnInit(): void {
    // Check localStorage for dark mode preference
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
  }
}
