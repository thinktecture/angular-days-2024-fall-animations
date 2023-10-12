import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '@sl/components';
import { DataService } from '../../data.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, map, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  private readonly dataService = inject(DataService);
  private filter = signal<'all' | 'even' | 'odd'>('all');
  private filter$ = toObservable(this.filter);

  messages$ = combineLatest([this.dataService.messages$, this.filter$]).pipe(
    map(([messages, filter]) => {
      switch (filter) {
        case 'even':
          return messages.filter(({ id }) => id % 2 === 0);
        case 'odd':
          return messages.filter(({ id }) => id % 2 === 1);
        default:
          return messages;
      }
    }),
  );

  public deleteMessage(messageId: number): void {
    this.dataService.deleteMessage(messageId);
  }

  public filterMessages(filter: 'all' | 'even' | 'odd'): void {
    //@ts-ignore
    document?.startViewTransition(() => {
      this.filter.set(filter);
    });
  }
}
