import { Routes } from '@angular/router';
import HomeComponent from './components/home/home.component';
import WatchesComponent from './components/watches/watches.component';
import watchesResolver from './resolvers/watches.resolver';

const APP_ROUTES: Routes = [
  {
    path: 'watches',
    component: WatchesComponent,
    resolve: {
      watches: watchesResolver,
    },
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
