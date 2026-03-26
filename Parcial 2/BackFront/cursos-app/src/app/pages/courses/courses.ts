import { Component, OnInit,ChangeDetectorRef, signal } from '@angular/core';
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
  //signlas para manejar el estado local reactivo
  courses= signal<any[]>([])

  constructor(private CourseSerivce: CourseSerivce,private cd: ChangeDetectorRef){}

  ngOnInit(){
    this.CourseSerivce.getCourses().subscribe(data =>{
      this.courses.set(data)
      this.cd.detectChanges()
    })
  }

}
