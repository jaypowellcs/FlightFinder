import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
//Pages
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { PlanPageComponent } from './Pages/plan-page/plan-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { FaqPageComponent } from './Pages/faq-page/faq-page.component';
//Components 
import { HomecontentComponent } from './Components/homecontent/homecontent.component';
import { TripFinderComponent } from './Components/trip-finder/trip-finder.component';
import { CalltoactionComponent } from './Shared/calltoaction/calltoaction.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    PlanPageComponent,
    LoginPageComponent,
    TripFinderComponent, 
    HomecontentComponent,
    FaqPageComponent, 
    CalltoactionComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FlightFinder';
}
