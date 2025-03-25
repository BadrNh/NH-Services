import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})

export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) {
    // Auto-close the menu on every route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
