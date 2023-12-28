import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { LoginPageComponent } from './Pages/home/login-page/login-page.component';
import { TripFinderComponent } from './Components/trip-finder/trip-finder.component';
import { HomecontentComponent } from './Components/homecontent/homecontent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginPageComponent,
    TripFinderComponent, 
    HomecontentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FlightFinder';
}
