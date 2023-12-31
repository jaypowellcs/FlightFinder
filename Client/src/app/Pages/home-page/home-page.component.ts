import { Component } from '@angular/core';
import { TripFinderComponent } from '../../Components/trip-finder/trip-finder.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TripFinderComponent, FontAwesomeModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  faArrowRight = faArrowRight; 
}
