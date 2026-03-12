import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {

  courses = [
    {
      id: 1,
      name: 'Angular desde 0',
      category: 'FrontEnd',
      duration: '20 horas',
      mode: 'En linea',
      active: true
    },
    { id: 2, name: 'Node.js Avanzado', category: 'BackEnd', duration: '35 horas', mode: 'En linea', active: true },
    { id: 3, name: 'UI/UX Design Fundamentals', category: 'Design', duration: '15 horas', mode: 'Presencial', active: false },
    { id: 4, name: 'Flutter para iOS y Android', category: 'Mobile', duration: '40 horas', mode: 'Híbrido', active: true },
    { id: 5, name: 'Docker y Kubernetes', category: 'DevOps', duration: '25 horas', mode: 'En linea', active: true },
    { id: 6, name: 'React con TypeScript', category: 'FrontEnd', duration: '30 horas', mode: 'En linea', active: true },
    { id: 7, name: 'Bases de Datos NoSQL', category: 'BackEnd', duration: '18 horas', mode: 'Presencial', active: true }
  ];

  selectedCourse: any = null;
  showOnlyActive: boolean = false;

  selectCourse(course: any){
    this.selectCourse = course;
  }

  toggleActiveFilter(){
    this.showOnlyActive = !this.showOnlyActive;
  }

  receiveMessage(message: string){
    alert(message);
  }

  get filteredCourses(){
    if(this.showOnlyActive){
      return this.courses.filter(courses => courses.active);
    }
    return this.courses;
  }

}
