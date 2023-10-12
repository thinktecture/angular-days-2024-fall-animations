import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  ListItemComponent,
  SearchBarComponent,
  ViewTransitionDirective,
  ViewTransitionStore,
} from '@sl/components';
import { RouterLink } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    CardComponent,
    ListItemComponent,
    RouterLink,
    ViewTransitionDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly dataService = inject(DataService);
  private readonly viewTransitionStore = inject(ViewTransitionStore);

  conferences$ = this.dataService.conferences$;
  messages$ = this.dataService.messages$;
  recentTrigger$ = this.viewTransitionStore.triggerId$;

  public deleteMessage(messageId: number): void {
    this.dataService.deleteMessage(messageId);
  }
}
