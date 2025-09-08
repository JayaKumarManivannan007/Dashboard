import { Component } from '@angular/core';

interface Resource {
  title: string;
  type: 'video' | 'article';
  url: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  resources: Resource[] = [
    {
      title: 'Coding for Kids Explained | What is Coding | Why is Coding Important',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=g1J4181W8ss'
    },
    {
      title: 'Top 10 Free Tech Learning Websites for Students',
      type: 'article',
      url: 'https://www.educationworld.com/a_curr/ten-great-web-sites-for-classroom.shtml'
    },
    {
      title: 'Introduction to Robotics for Beginners',
      type: 'video',
      url: 'https://www.youtube.com/playlist?list=PLGs0VKk2DiYxkoe2XNxDvVHqL5XG4dMWi'
    },
    {
      title: 'How School Students Can Improve in STEM',
      type: 'article',
      url: 'https://www.techlearning.com/news/awesome-articles-for-students-websites-and-other-resources'
    }
  ];
}
