import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
 faFacebook = faFacebook; 
 faGoogle = faGoogle;
 faTwitter = faTwitter; 

}
