import { Component } from '@angular/core';
import { TripFinderComponent } from '../../Components/trip-finder/trip-finder.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TripFinderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
