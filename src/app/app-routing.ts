import { Routes } from '@angular/router';
import HomeComponent from './components/home/home.component';
import WatchesComponent from './components/watches/watches.component';

const APP_ROUTES: Routes = [
  {
    path: 'watches',
    component: WatchesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

export default APP_ROUTES;
