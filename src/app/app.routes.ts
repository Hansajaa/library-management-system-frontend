import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { Component } from '@angular/core';
import { BookRegisterComponent } from './pages/book-register/book-register.component';
import { BorrowerRegisterComponent } from './pages/borrower-register/borrower-register.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"viewbooks",
        component:ViewAllBooksComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"registerbooks",
        component:BookRegisterComponent
    },
    {
        path:"registerborrower",
        component:BorrowerRegisterComponent
    }
];
