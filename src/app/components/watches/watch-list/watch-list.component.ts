import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Watch from 'src/app/models/watch';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})
export default class WatchListComponent {
  @Input()
  watches!: Watch[];
}
