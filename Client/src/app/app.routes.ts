import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { PlanPageComponent } from './Pages/plan-page/plan-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';

export const routes: Routes = [
    {path: 'Home', component: HomePageComponent},
    {path: 'Login-Signup', component: LoginPageComponent},
    {path: 'About', component: AboutPageComponent},
    {path: 'Plan', component: PlanPageComponent},
    {path: 'Contact', component: ContactPageComponent},
];
