import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Watch from 'src/app/models/watch';
import WatchListComponent from './watch-list/watch-list.component';

@Component({
  selector: 'app-watches',
  standalone: true,
  imports: [CommonModule, WatchListComponent],
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.scss'],
})
export default class WatchesComponent implements OnInit {
  watches$!: Observable<Watch[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.watches$ = of(this.route.snapshot.data['watches']);
  }
}
