import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseSerivce {
  private apiUrl = 'http://localhost:3000/courses'

  constructor(private http: HttpClient){}

  courses = [
    { id: 1, name: 'Angular 1', category: 'FrontEnd', duration: '20 hrs' },
    { id: 2, name: 'Angular 2', category: 'FrontEnd', duration: '20 hrs' },
    { id: 3, name: 'Angular 3', category: 'FrontEnd', duration: '20 hrs' }
  ];

  // getCourses() {
  //   return this.courses
  // }
  getCourses(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
  // getCourseById(id: number) {
  //   return this.courses.find(course => course.id === id);
  // }
  url2 = '';
  getCourseById(id: number): Observable<any> {
    this.url2 = this.apiUrl+'/'+String(id);
    return this.http.get<any>(this.url2);
  }
}
