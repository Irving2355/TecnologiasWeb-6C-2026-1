import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CourseFromTemplate } from './components/course-from-template/course-from-template';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },

    {
        path: 'courses',
        component: Courses
    },

    {
        path: 'courses/:id',
        component: CourseDetail
    }, 

    {
        path:'courses/agregar',
        component: CourseFromTemplate
    }
];
