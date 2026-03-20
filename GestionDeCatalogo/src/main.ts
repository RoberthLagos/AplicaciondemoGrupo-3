import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <--- Antes decía 'App' y por eso fallaba

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
