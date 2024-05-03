import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'sala-de-juegos';
    isLogged = false
    
    // login_url = "/login"

}
