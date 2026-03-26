import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-from-template',
  imports: [FormsModule],
  templateUrl: './course-from-template.html',
  styleUrl: './course-from-template.css',
})
export class CourseFromTemplate {
  @Output() saveCourse = new EventEmitter<any>()

  course = {
    name: '',
    category: '',
    duration: '',
    mode: '',
    teacher: '',
    description: ''
  }

  submitFrom() {
    this.saveCourse.emit({ ...this.course })
    this.course = {
      name: '',
      category: '',
      duration: '',
      mode: '',
      teacher: '',
      description: ''
    }
  }
}
