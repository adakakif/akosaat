import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, UrlSerializer } from '@angular/router';
import AppComponent from './app/app.component';
import APP_ROUTES from './app/app-routing';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES, {
        scrollPositionRestoration: 'enabled',
        paramsInheritanceStrategy: 'always',
        malformedUriErrorHandler: (
          error: URIError,
          urlSerializer: UrlSerializer,
          url: string,
        ) => urlSerializer.parse('/page-not-found'),
      }),
    ),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
  ],
  // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
}).catch((err: any) => console.error(err));
