import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./features/home/home')},
    {path: 'products', loadComponent: () => import('./features/products/products')},
    {path: 'customized', loadComponent: () => import('./features/customized/customized')},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
