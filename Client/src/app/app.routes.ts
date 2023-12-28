import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { PlanPageComponent } from './Pages/plan-page/plan-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { FaqPageComponent } from './Pages/faq-page/faq-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'Home', component: HomePageComponent},
    {path: 'Login-Signup', component: LoginPageComponent},
    {path: 'About', component: AboutPageComponent},
    {path: 'Plan', component: PlanPageComponent},
    {path: 'FAQ', component: FaqPageComponent},
    {path: 'Contact', component: ContactPageComponent},
];
