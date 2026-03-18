import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseSerivce {
  courses = [
    {id: 1, name: 'Angular 1', category: 'FrontEnd', duration:'20 hrs'},
    {id: 2, name: 'Angular 2', category: 'FrontEnd', duration:'20 hrs'},
    {id: 3, name: 'Angular 3', category: 'FrontEnd', duration:'20 hrs'}
  ];

  getCourses(){
    return this.courses
  }

  getCourseById(id: number){
    return this.courses.find(course => course.id === id);
  }
}
