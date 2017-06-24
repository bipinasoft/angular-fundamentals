import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events: any;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
