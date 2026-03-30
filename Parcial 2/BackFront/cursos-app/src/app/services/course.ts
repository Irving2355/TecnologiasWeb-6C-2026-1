import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseSerivce {
  private apiUrl = 'http://localhost:3000/api/courses'

  constructor(private http: HttpClient){}

  //observable para obtener todos los cursos
  getCourses(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }

  //observable para obtener curso por id
  getCoursesById(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`) 
  }

  //observable para agregar curso
  createCourse(course: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, course)
  }

  //promesa
  getCoursesPromise(): Promise<any[]>{
    return fetch(this.apiUrl).then(res => res.json());
  }
}
