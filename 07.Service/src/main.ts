import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { AComponent } from './app/components/a/a.component';     // a.component sayfası için eklendi


bootstrapApplication(AComponent, appConfig)
  .catch((err) => console.error(err));
