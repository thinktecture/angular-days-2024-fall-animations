import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent, ListContainer, ListItem } from '@sl/components';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, ListItemComponent],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ListContainer,ListItem]
})
export class MessagesComponent {
  private readonly dataService = inject(DataService);
  messages$ = this.dataService.messages$;

  public deleteMessage(messageId: number): void {
    this.dataService.deleteMessage(messageId);
  }
}
