import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponet),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    },
    {
        path: '',
        loadComponent: () => import('./pages/layout/layout.component').then(m => m.LayoutComponent),

        children: [
            {path: '', pathMatch: 'full', redirectTo: 'dashboard'},

            {
                path: 'dashboard',
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
            }

        ]
    },
    {path: '**', redirectTo: 'login'},
];
