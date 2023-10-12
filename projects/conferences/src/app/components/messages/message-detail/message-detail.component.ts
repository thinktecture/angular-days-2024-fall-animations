import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DataService } from '../../../data.service';
import { Message, ViewTransitionDirective } from '@sl/components';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-message-datail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, MatRippleModule, ViewTransitionDirective],
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss'],
})
export class MessageDetailComponent {
  private readonly dataService = inject(DataService);

  message$?: Observable<Message>;

  //Möglich seit Angular 16 --> Router-Config -> withComponentInputBinding()
  @Input()
  set id(messageId: string) {
    this.message$ = this.dataService.getMessage(Number(messageId));
  }
}
