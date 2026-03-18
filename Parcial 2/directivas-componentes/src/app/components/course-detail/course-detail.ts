import { Component,EventEmitter,Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [CommonModule ],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail {

  @Input() course: any;

  @Output() notifyParent = new EventEmitter<string>();

  sendMessage(){
    this.notifyParent.emit('El alumno dio click en Inscribir desde el componente hijo');
  }

}
