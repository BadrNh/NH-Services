import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-portfolio';
  scrollToCompanyContact() {
    const el = document.querySelector('.company-contact-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to company page, then scroll after it's loaded
      const router = document.querySelector('router-outlet');
      if (router) {
        window.location.href = '/company';
        setTimeout(() => {
          const tryScroll = () => {
            const el = document.querySelector('.company-contact-cta');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              setTimeout(tryScroll, 200); // retry until it's found
            }
          };
          tryScroll();
        }, 500);
      }
    }
  }
  scrollToContact() {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
