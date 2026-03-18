import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseSerivce } from '../../services/course';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit{
  courses: any[] = [];

  constructor(private CourseSerivce: CourseSerivce){}

  ngOnInit(): void {
    this.courses = this.CourseSerivce.getCourses();
  }



}
