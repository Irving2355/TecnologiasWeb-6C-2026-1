import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseSerivce {
  private apiUrl = 'http://localhost:3000/courses'

  constructor(private http: HttpClient){}

  //observable para obtener todos los cursos
  getCourses(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }
}
