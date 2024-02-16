import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"viewbooks",
        component:ViewAllBooksComponent
    }
];
