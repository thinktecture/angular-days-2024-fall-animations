import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animation: 'home' } },
  { path: 'messages', loadChildren: () => import('./components/messages/message.routes') },
  { path: 'conferences', loadChildren: () => import('./components/conferences/conference.routes') },
];
