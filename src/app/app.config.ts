import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router'; // ✅ This line is good
import { NavbarComponent } from './components/navbar/navbar.component';
import { routes } from './app.routes';




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
  ],

};
