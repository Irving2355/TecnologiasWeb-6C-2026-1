import { Component, OnInit,ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseSerivce } from '../../services/course';
import { RouterLink } from "@angular/router";
import { CourseFromTemplate } from '../../components/course-from-template/course-from-template';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink,CourseFromTemplate],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit{
  //signlas para manejar el estado local reactivo
  courses= signal<any[]>([])

  constructor(private CourseSerivce: CourseSerivce,private cd: ChangeDetectorRef){}

  ngOnInit(){
    this.CourseSerivce.getCourses().subscribe(data =>{
      this.courses.set(data)
      this.cd.detectChanges()
    })
  }

  onSaveCourse(course: any){
    this.CourseSerivce.createCourse(course).subscribe(() =>{
      this.CourseSerivce.getCourses().subscribe(data =>{
        this.courses.set(data)
        
        
      })
    })
  }

}
