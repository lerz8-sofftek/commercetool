import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyWidgetComponent } from './app/my-widget/my-widget.component';

bootstrapApplication(MyWidgetComponent, {
  providers: [importProvidersFrom(BrowserModule)]
}).then(appRef => {
  const injector = appRef.injector;
  const webComponent = createCustomElement(MyWidgetComponent, { injector });
  customElements.define('my-angular-widget', webComponent);
});
