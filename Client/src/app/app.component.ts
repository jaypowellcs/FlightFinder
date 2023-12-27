import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';

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
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FlightFinder';
}
