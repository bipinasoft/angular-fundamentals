import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
