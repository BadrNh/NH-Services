import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeOut', [
      transition(':leave', [
        animate('400ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
      ])
    ])
  ],
  
})
export class AppComponent implements AfterViewInit {
  title = 'NH-Services';
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Check if we navigated with a flag to scroll after route change
    if (window.location.hash === '#scrollToCompany') {
      this.tryScrollToCTA();
    }
  }

  scrollToCompanyContact() {
    const el = document.querySelector('.company-contact-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/company']).then(() => {
        // Use hash to signal intent
        window.location.hash = 'scrollToCompany';
      });
    }
  }

  tryScrollToCTA() {
    const tryScroll = () => {
      const el = document.querySelector('.company-contact-cta');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.location.hash = ''; // clean up
      } else {
        setTimeout(tryScroll, 200); // wait for DOM
      }
    };
    tryScroll();
  }
  acceptedCookies = false;

acceptCookies() {
  localStorage.setItem('cookieAccepted', 'true');
  this.acceptedCookies = true;
}
declineCookies() {
  this.acceptedCookies = true;
  // Optionally store refusal to localStorage
  localStorage.setItem('cookieConsent', 'declined');
}
ngOnInit() {
  const consent = localStorage.getItem('cookieConsent');
  this.acceptedCookies = consent === 'accepted';

  if (consent === 'accepted') {
    // Load analytics scripts, etc.
  }
}

}
