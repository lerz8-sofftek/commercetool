import { ApplicationConfig, importProvidersFrom, ɵNoopNgZone } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [  { provide: ɵNoopNgZone },  importProvidersFrom(BrowserModule), provideRouter(routes)]
};
