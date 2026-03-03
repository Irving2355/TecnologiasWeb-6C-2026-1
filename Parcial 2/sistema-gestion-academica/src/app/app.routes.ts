import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,

        children: [
            {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
            },

            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
            //despues agregaremos students courses y enrollments

            {
                path: 'students',
                loadComponent: () => import('./pages/students/students.component').then(m => m.StudentsComponent),
            },

            {
                path: 'courses',
                loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent),
            },

            {
                path: 'enrollments',
                loadComponent: () => import('./pages/enrollments/enrollments.component').then(m => m.EnrollmentsComponent),
            }

        ]
    },
    {path: '**', redirectTo: 'login'},
];
