import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { CourseDetail } from './pages/course-detail/course-detail';

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
    }
];
