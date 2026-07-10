import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./features/home/home')},
    {path: 'products', loadComponent: () => import('./features/products/products')},
    {path: 'customized', loadComponent: () => import('./features/customized/customized')},
    {path: 'contact', loadComponent: () => import('./features/contact/contact'),},
    {path: 'cart', loadComponent: () => import('./features/cart/cart')},
    {path: 'login', loadComponent: () => import('./features/login/login')},
    {path: 'register', loadComponent: () => import('./features/register/register')},
    {path: 'terms', loadComponent: () => import('./shared/terms/terms')},
    {path: 'privacy', loadComponent: () => import('./shared/privacy/privacy')},
    {path: 'shipping', loadComponent: () => import('./shared/shipping/shipping')},
    {path: 'faq', loadComponent: () => import('./shared/faq/faq')},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
