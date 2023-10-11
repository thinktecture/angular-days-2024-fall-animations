import { Routes } from '@angular/router';
import { ConferenceDetailComponent } from './conference-detail/conference-detail.component';
import { ConferencesComponent } from './conferences.component';

const conferenceRoutes: Routes = [
  { path: '', component: ConferencesComponent, data: { animation: 'conferences' } },
  { path: ':id', component: ConferenceDetailComponent, data: { animation: 'detail' } },
];

export default conferenceRoutes;
