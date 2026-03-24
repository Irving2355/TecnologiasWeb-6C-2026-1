import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseSerivce } from '../../services/course';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit{
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseSerivce,
    private cd: ChangeDetectorRef
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.course = this.courseService.getCourseById(id);

    this.courseService.getCourseById(id).subscribe(data =>{
      this.course = data;
      this.cd.detectChanges();
    });
  }

}
