import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-from-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './course-from-reactive.html',
  styleUrl: './course-from-reactive.css',
})
export class CourseFromReactive {
  from = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', [Validators.required, Validators.minLength(3)]),
    duration: new FormControl('', [Validators.required]),
    mode: new FormControl('', [Validators.required]),
    teacher: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(100)])
  })
}
