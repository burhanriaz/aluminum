import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
];

export const appConfig = {
  providers: [
    provideRouter(routes)
  ]
};
