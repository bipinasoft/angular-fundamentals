import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getMockEventData();
  }
}
