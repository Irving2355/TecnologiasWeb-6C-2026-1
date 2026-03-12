import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './components/course-list/course-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CourseList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directivas-componentes');
}
