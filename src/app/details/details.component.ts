import { Component, OnInit } from '@angular/core';
import { EventService } from '../providers/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEventModel } from '../models/IEventModel';
import { ISessionModel } from '../models/ISessionModel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  addMode: boolean;
  event: IEventModel;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISessionModel) {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    session.id = maxId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
