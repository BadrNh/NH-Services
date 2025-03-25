import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor(private router: Router) {}

  scrollToContact() {
    this.router.navigate(['/contact']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('contact-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // slight delay to ensure DOM is ready
    });
  }
}
