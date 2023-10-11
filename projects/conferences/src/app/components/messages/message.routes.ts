import { Routes } from '@angular/router';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessagesComponent } from './messages.component';

const messageRoutes: Routes = [
  { path: '', component: MessagesComponent, data: { animation: 'messages' } },
  { path: ':id', component: MessageDetailComponent, data: {animation: 'detail'} },
];

export default messageRoutes;
